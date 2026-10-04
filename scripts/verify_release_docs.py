"""Check current release claims. --github also checks live publication identity.

Offline consistency is not proof of publication, downloaded assets or installation.
Historical release notes and rollback entries intentionally remain untouched.
"""
from pathlib import Path
import argparse
import ast
import json
import os
import re
import sys
from urllib.request import Request, urlopen

ROOT = Path(__file__).resolve().parents[1]
REPO = 'pmeglaw/ibm-design-language-plugin'
RELEASE_URL = f'https://github.com/{REPO}/releases/tag/'
VERSION = r'\d+\.\d+\.\d+'


def require(condition, message):
    if not condition:
        raise ValueError(message)


def one(text, pattern, label):
    matches = re.findall(pattern, text, re.MULTILINE)
    require(len(matches) == 1, f'{label}: expected exactly one matching current field')
    return matches[0]


def section(text, heading, label):
    marker = f'## {heading}\n'
    require(text.count(marker) == 1, f'{label}: missing or duplicate {heading} section')
    return text.split(marker, 1)[1].split('\n## ', 1)[0]


def release_links(text, expected, label):
    links = re.findall(r'https://github\.com/[^\s)]+/releases/tag/[^\s)]+', text)
    require(bool(links) and all(link == expected for link in links),
            f'{label}: current release links must point to {expected}')


def github_json(path):
    headers = {'Accept': 'application/vnd.github+json',
               'X-GitHub-Api-Version': '2022-11-28',
               'User-Agent': 'ibm-release-docs-verifier'}
    token = os.environ.get('GITHUB_TOKEN')
    if token:
        headers['Authorization'] = f'Bearer {token}'
    request = Request(f'https://api.github.com/repos/{REPO}/{path}', headers=headers)
    with urlopen(request, timeout=30) as response:
        result = json.load(response)
    require(isinstance(result, dict), 'GitHub returned an unexpected response')
    return result


def verify(root, online=False):
    root = Path(root)

    def read(path):
        return (root / path).read_text(encoding='utf-8')

    recovery = read('docs/RECOVERY.md')
    identity = section(recovery, 'Release identity', 'docs/RECOVERY.md')
    # Count labels independently of valid values: a malformed duplicate is still
    # a conflicting claim to a person reading the rendered Markdown.
    for label in ('Version', 'Immutable tag', '`plugin.zip` SHA-256',
                  'Manifest', 'Release commit', 'Publication'):
        count = len(re.findall(rf'^[ \t]*-[ \t]+{re.escape(label)}[ \t]*:', identity, re.MULTILINE))
        require(count == 1, f'docs/RECOVERY.md: expected exactly one {label} field')
    identity = '\n'.join(line.strip() for line in identity.splitlines())
    version = one(identity, rf'^- Version: `({VERSION})`$', 'docs/RECOVERY.md version')
    tag = one(identity, rf'^- Immutable tag: `(v{VERSION})`$', 'docs/RECOVERY.md tag')
    commit = one(identity, r'^- Release commit: `([0-9a-f]{40})`', 'docs/RECOVERY.md commit')
    checksum = one(identity, r'^- `plugin.zip` SHA-256: `([0-9a-f]{64})`$', 'docs/RECOVERY.md checksum')
    manifest = one(identity, r'^- Manifest: `([^`]+)`$', 'docs/RECOVERY.md manifest')
    require(tag == f'v{version}', 'docs/RECOVERY.md: tag does not match version')
    require(manifest == f'releases/{version}/files.json', 'docs/RECOVERY.md: manifest version mismatch')
    require((root / manifest).is_file(), 'docs/RECOVERY.md: release manifest is missing')
    expected_url = RELEASE_URL + tag
    release_links(identity, expected_url, 'docs/RECOVERY.md')
    require(one(identity, r"git rev-parse '(v[^']+)\^\{commit\}'", 'docs/RECOVERY.md tag command') == tag,
            'docs/RECOVERY.md: tag command version mismatch')
    restored = section(recovery, 'Restore and verify', 'docs/RECOVERY.md')
    require(one(restored, r'`(releases/[^`]+/files.json)`', 'docs/RECOVERY.md install manifest') == manifest,
            'docs/RECOVERY.md: installation manifest mismatch')
    checksum_file = read(f'releases/{version}/SHA256SUMS').split()
    require(checksum_file == [checksum, 'plugin.zip'], 'docs/RECOVERY.md: checksum does not match SHA256SUMS')

    source = json.loads(read('plugins/ibm-design-language/plugin.json'))['version']
    require(isinstance(source, str) and re.fullmatch(VERSION, source), 'plugin.json: invalid version')
    assignments = [node.value for node in ast.parse(read('scripts/verify.py')).body
                   if isinstance(node, ast.Assign)
                   and any(isinstance(t, ast.Name) and t.id == 'CURRENT' for t in node.targets)]
    require(len(assignments) == 1 and ast.literal_eval(assignments[0]) == source,
            'scripts/verify.py: CURRENT must match plugin.json')
    releasing = read('docs/RELEASING.md')
    require(one(releasing, rf'\(currently ({VERSION})\)', 'docs/RELEASING.md CURRENT') == source,
            'docs/RELEASING.md: CURRENT version does not match source')

    readme = read('README.md')
    intro = readme.split('\n## ', 1)[0]
    require(one(intro, rf'The current published package is \*\*({VERSION})\*\*', 'README.md published version') == version,
            'README.md: published version mismatch')
    release_links(intro, expected_url, 'README.md')
    contents = section(readme, 'Repository contents', 'README.md')
    package_entry = one(contents, r'^- `plugins/ibm-design-language/`: (.*)$', 'README.md package entry')
    archives = re.findall(rf'releases/({VERSION})/', package_entry)
    require(all(v in (version, source) for v in archives),
            'README.md: package archive reference must match published or candidate version')
    if source == version:
        claim = one(intro, rf'The working package matches published \*\*({VERSION})\*\*, released from commit `([0-9a-f]{{40}})`', 'README.md source identity')
        require(claim == (version, commit), 'README.md: source release identity mismatch')
        require('The working source is' not in intro, 'README.md: contradictory source status')
        require(one(contents, rf'`plugins/ibm-design-language/`: the published ({VERSION}) package source', 'README.md package contents') == source,
                'README.md: package contents version mismatch')
    else:
        require(tuple(map(int, source.split('.'))) > tuple(map(int, version.split('.'))),
                'plugin.json: source is older than documented published release')
        require(one(intro, rf'The working source is \*\*({VERSION}), an unpublished [^*]+\*\*', 'README.md candidate') == source,
                'README.md: candidate version mismatch')
        require('The working package matches published' not in intro, 'README.md: contradictory source status')
        require(one(contents, rf'`plugins/ibm-design-language/`: the unpublished ({VERSION}) working source', 'README.md candidate contents') == source,
                'README.md: candidate contents version mismatch')

    installation = read('docs/INSTALLATION.md')
    selected = section(installation, 'Select the published release', 'docs/INSTALLATION.md')
    release_links(selected, expected_url, 'docs/INSTALLATION.md')
    require(one(selected, rf'\[published ({VERSION}) release\]', 'docs/INSTALLATION.md release label') == version,
            'docs/INSTALLATION.md: selected version mismatch')
    require(one(selected, r"git rev-parse '(v[^']+)\^\{commit\}'", 'docs/INSTALLATION.md tag command') == tag,
            'docs/INSTALLATION.md: tag command version mismatch')
    require(one(installation, rf'Confirm version `({VERSION})`', 'docs/INSTALLATION.md confirmation') == version,
            'docs/INSTALLATION.md: installed version instruction mismatch')

    history = read('docs/HISTORY.md')
    require(one(history, rf'The current published plugin package is ({VERSION});', 'docs/HISTORY.md current version') == version,
            'docs/HISTORY.md: current version mismatch')
    current_history = section(history, 'Release validation', 'docs/HISTORY.md').split('\nVersion ', 1)[0]
    release_links(current_history, expected_url, 'docs/HISTORY.md')

    if online:
        release = github_json('releases/latest')
        require(release.get('tag_name') == tag, 'GitHub latest release differs from documented version')
        require(release.get('draft') is False and release.get('prerelease') is False,
                'GitHub latest release must be a published stable release')
        require(release.get('html_url') == expected_url, 'GitHub release URL mismatch')
        obj = github_json(f'git/ref/tags/{tag}')['object']
        for _ in range(5):
            require(re.fullmatch(r'[0-9a-f]{40}', obj['sha']) is not None, 'GitHub tag has invalid SHA')
            if obj['type'] == 'commit':
                break
            require(obj['type'] == 'tag', 'GitHub release tag must resolve to a commit')
            obj = github_json(f'git/tags/{obj["sha"]}')['object']
        require(obj['type'] == 'commit' and obj['sha'] == commit,
                'GitHub release tag commit differs from docs/RECOVERY.md')

    return {'status': 'pass', 'published_version': version, 'source_version': source,
            'release_commit': commit,
            'publication': 'verified (GitHub release and tag)' if online else 'unverified (offline)',
            'downloaded_release_assets': 'unverified', 'installation': 'unverified'}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--github', action='store_true', help='Require live release/tag verification; API errors fail')
    args = parser.parse_args()
    try:
        print(json.dumps(verify(ROOT, online=args.github), indent=2))
        return 0
    except (OSError, ValueError, KeyError, TypeError, SyntaxError) as error:
        print(f'Release documentation verification failed: {error}', file=sys.stderr)
        return 1


if __name__ == '__main__':
    raise SystemExit(main())

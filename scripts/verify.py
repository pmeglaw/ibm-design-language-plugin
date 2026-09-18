"""Offline integrity and synthetic checks. Never invokes a model or installer."""
from pathlib import Path
import ast
import hashlib
import json
import os
import re
import subprocess
import sys
import zipfile

ROOT = Path(__file__).resolve().parents[1]
CURRENT = '1.1.5'


def require(condition, message):
    if not condition:
        raise RuntimeError(message)


def digest(data):
    return hashlib.sha256(data).hexdigest()


def main():
    report = ROOT / '.verification'
    report.mkdir(exist_ok=True)
    manifests = {}
    for version in ('1.1.4', CURRENT):
        release = ROOT / 'releases' / version
        expected = json.loads((release / 'files.json').read_text(encoding='utf-8'))
        archive = release / 'plugin.zip'
        checksum, name = (release / 'SHA256SUMS').read_text().split()
        require(name == 'plugin.zip' and digest(archive.read_bytes()) == checksum,
                f'{version}: archive checksum mismatch')
        with zipfile.ZipFile(archive) as z:
            require(len(z.namelist()) == len(set(z.namelist())), 'Duplicate ZIP entries')
            require(all(not Path(n).is_absolute() and '..' not in Path(n).parts
                        and '\\' not in n and ':' not in n for n in z.namelist()),
                    'Unsafe ZIP path')
            actual = {n: digest(z.read(n)) for n in z.namelist()}
            require(actual == expected and z.testzip() is None, f'{version}: ZIP file mismatch')
        manifests[version] = expected

    plugin = ROOT / 'plugins/ibm-design-language'
    require(not any(p.is_symlink() for p in plugin.rglob('*')), 'Plugin symlink found')
    actual = {p.relative_to(plugin).as_posix(): digest(p.read_bytes())
              for p in plugin.rglob('*') if p.is_file()}
    require(actual == manifests[CURRENT], 'Plugin differs from frozen release')
    manifest = json.loads((plugin / 'plugin.json').read_text())
    require(manifest['version'] == CURRENT, 'Wrong plugin version')
    market = json.loads((ROOT / '.agents/plugins/marketplace.json').read_text())
    require(market['name'] == 'jp-personal' and len(market['plugins']) == 1, 'Marketplace mismatch')
    entry = market['plugins'][0]
    require(entry['name'] == manifest['name'] and entry['source'] == {
        'source': 'local', 'path': './plugins/ibm-design-language'}, 'Marketplace source mismatch')
    links = 0
    for p in plugin.rglob('*.md'):
        for target in re.findall(r'\]\(([^)]+)\)', p.read_text(encoding='utf-8')):
            if '://' in target or target.startswith('#'):
                continue
            target = target.split('#')[0]
            if target:
                require((p.parent / target).resolve().exists(), f'Broken link: {p}: {target}')
                links += 1
    for p in plugin.rglob('*.json'):
        json.loads(p.read_text(encoding='utf-8'))
    for p in plugin.rglob('*.py'):
        ast.parse(p.read_text(encoding='utf-8-sig'))
    suite = json.loads((plugin / 'skills/ibm-design-language/evals.json').read_text())
    require(len(suite['evals']) == 21 and sum(len(c['assertions']) for c in suite['evals']) == 121,
            'Bundled regression suite changed')
    env = dict(os.environ, IBM_EVAL_TEST_TMP=str(report / 'synthetic-temp'))
    tests = subprocess.run([sys.executable, '-B', '-X', 'utf8',
                            str(plugin / 'skills/ibm-design-language/scripts/test_evaluate.py')],
                           cwd=ROOT, env=env, capture_output=True, timeout=120)
    (report / 'synthetic-tests.txt').write_bytes(tests.stdout + tests.stderr)
    require(tests.returncode == 0, 'Synthetic tests failed; see .verification/synthetic-tests.txt')
    result = {'status': 'pass', 'version': CURRENT, 'plugin_files': len(actual),
              'verified_releases': list(manifests), 'local_links': links,
              'synthetic_tests': 'pass', 'model_calls': 0, 'installation_changes': 0}
    (report / 'validation.json').write_text(json.dumps(result, indent=2) + '\n')
    print(json.dumps(result, indent=2))


if __name__ == '__main__':
    main()

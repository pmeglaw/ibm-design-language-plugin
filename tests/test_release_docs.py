"""Regression checks for current claims; frozen historical prose is not rewritten."""
from pathlib import Path
import importlib.util
import json
import tempfile
import unittest
from unittest.mock import patch
from urllib.error import URLError

ROOT = Path(__file__).resolve().parents[1]
SCRIPT = ROOT / 'scripts/verify_release_docs.py'
SHA = 'a' * 40
DIGEST = 'b' * 64
URL = 'https://github.com/pmeglaw/ibm-design-language-plugin/releases/tag/v1.2.3'


class ReleaseDocsTest(unittest.TestCase):
    def setUp(self):
        self.assertTrue(SCRIPT.exists(), 'Release documentation checker is missing')
        spec = importlib.util.spec_from_file_location('release_docs', SCRIPT)
        self.module = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(self.module)
        temp = tempfile.TemporaryDirectory()
        self.addCleanup(temp.cleanup)
        self.root = Path(temp.name)
        self.write('docs/RECOVERY.md', f'''# Recovery
## Release identity
- Version: `1.2.3`
- Immutable tag: `v1.2.3`
- `plugin.zip` SHA-256: `{DIGEST}`
- Manifest: `releases/1.2.3/files.json`
- Release commit: `{SHA}`
- Publication: [GitHub release]({URL})
Fetch with `git rev-parse 'v1.2.3^{{commit}}'`.
## Restore and verify
Compare to `releases/1.2.3/files.json`.
## Previous release rollback identity
Version 1.2.2 remains valid history.
''')
        self.write('README.md', f'''# Plugin
The current published package is **1.2.3**. [Release]({URL})
See the [published release notes]({URL}).
The working package matches published **1.2.3**, released from commit `{SHA}`.
## What it does
Historical version 1.2.2 remains documented.
## Repository contents
- `plugins/ibm-design-language/`: the published 1.2.3 package source; archive in `releases/1.2.3/`.
''')
        self.write('docs/INSTALLATION.md', f'''# Installation
## Select the published release
Obtain the [published 1.2.3 release]({URL}).
Use `git rev-parse 'v1.2.3^{{commit}}'`.
## Install and confirm
Confirm version `1.2.3`, enabled state.
''')
        self.write('docs/HISTORY.md', f'''# History
The current published plugin package is 1.2.3; historical results stay frozen.
## Release validation
Current publication: [GitHub release]({URL}).
Version 1.2.2 was published earlier.
''')
        self.write('docs/RELEASING.md', 'The validator uses `CURRENT` (currently 1.2.3).\n')
        self.write('plugins/ibm-design-language/plugin.json', json.dumps({'version': '1.2.3'}))
        self.write('scripts/verify.py', "CURRENT = '1.2.3'\n")
        self.write('releases/1.2.3/SHA256SUMS', f'{DIGEST}  plugin.zip\n')
        self.write('releases/1.2.3/files.json', '{}\n')

    def write(self, path, content):
        target = self.root / path
        target.parent.mkdir(parents=True, exist_ok=True)
        target.write_text(content, encoding='utf-8')

    def replace(self, path, old, new):
        text = (self.root / path).read_text(encoding='utf-8')
        self.assertIn(old, text)
        self.write(path, text.replace(old, new))

    def test_consistent_docs_pass_without_claiming_remote_or_installation_checks(self):
        result = self.module.verify(self.root)
        self.assertEqual(result['status'], 'pass')
        self.assertEqual(result['published_version'], '1.2.3')
        self.assertEqual(result['publication'], 'unverified (offline)')
        self.assertEqual(result['installation'], 'unverified')

    def test_stale_current_claims_fail_in_each_document(self):
        for path, old in [
            ('README.md', 'current published package is **1.2.3**'),
            ('docs/HISTORY.md', 'current published plugin package is 1.2.3'),
            ('docs/INSTALLATION.md', 'Confirm version `1.2.3`'),
            ('docs/RELEASING.md', '(currently 1.2.3)'),
        ]:
            with self.subTest(path=path):
                original = (self.root / path).read_text(encoding='utf-8')
                self.replace(path, old, old.replace('1.2.3', '1.2.2'))
                with self.assertRaisesRegex(ValueError, path):
                    self.module.verify(self.root)
                self.write(path, original)

    def test_stale_current_release_links_fail(self):
        for path in ['README.md', 'docs/INSTALLATION.md', 'docs/HISTORY.md', 'docs/RECOVERY.md']:
            with self.subTest(path=path):
                original = (self.root / path).read_text(encoding='utf-8')
                self.replace(path, URL, URL.replace('1.2.3', '1.2.2'))
                with self.assertRaisesRegex(ValueError, path):
                    self.module.verify(self.root)
                self.write(path, original)

    def test_wrong_install_tag_command_fails(self):
        self.replace('docs/INSTALLATION.md', "v1.2.3^{commit}", "v1.2.2^{commit}")
        with self.assertRaisesRegex(ValueError, 'INSTALLATION'):
            self.module.verify(self.root)

    def test_missing_or_duplicate_identity_is_rejected(self):
        for replacement in ['', '- Version: `1.2.3`\n- Version: `1.2.3`']:
            with self.subTest(replacement=replacement):
                original = (self.root / 'docs/RECOVERY.md').read_text(encoding='utf-8')
                self.replace('docs/RECOVERY.md', '- Version: `1.2.3`', replacement)
                with self.assertRaisesRegex(ValueError, 'RECOVERY'):
                    self.module.verify(self.root)
                self.write('docs/RECOVERY.md', original)

    def test_wrong_recovery_tag_manifest_or_checksum_fails(self):
        for old, new in [('`v1.2.3`', '`v1.2.2`'), ('releases/1.2.3/files.json', 'releases/1.2.2/files.json'), (DIGEST, 'c' * 64)]:
            with self.subTest(old=old):
                original = (self.root / 'docs/RECOVERY.md').read_text(encoding='utf-8')
                self.replace('docs/RECOVERY.md', old, new)
                with self.assertRaises(ValueError):
                    self.module.verify(self.root)
                self.write('docs/RECOVERY.md', original)

    def test_conflicting_identity_labels_cannot_hide_behind_formatting(self):
        for label in ['Version', 'Immutable tag', '`plugin.zip` SHA-256', 'Manifest', 'Release commit', 'Publication']:
            for value in ['`1.2.2` ', 'malformed']:
                with self.subTest(label=label, value=value):
                    original = (self.root / 'docs/RECOVERY.md').read_text(encoding='utf-8')
                    self.replace('docs/RECOVERY.md', '## Release identity\n', f'## Release identity\n- {label}: {value}\n')
                    with self.assertRaisesRegex(ValueError, 'RECOVERY'):
                        self.module.verify(self.root)
                    self.write('docs/RECOVERY.md', original)

    def test_current_archive_path_cannot_point_to_a_previous_release(self):
        self.replace('README.md', 'archive in `releases/1.2.3/`', 'archive in `releases/1.2.2/`')
        with self.assertRaisesRegex(ValueError, 'README'):
            self.module.verify(self.root)

    def test_single_identity_field_allows_harmless_trailing_whitespace(self):
        self.replace('docs/RECOVERY.md', '- Version: `1.2.3`\n', '- Version: `1.2.3`  \n')
        self.assertEqual(self.module.verify(self.root)['status'], 'pass')

    def test_source_and_validator_versions_must_agree(self):
        self.write('scripts/verify.py', "CURRENT = '1.2.4'\n")
        with self.assertRaisesRegex(ValueError, 'CURRENT'):
            self.module.verify(self.root)

    def test_readme_source_commit_must_match_recovery(self):
        self.replace('README.md', SHA, 'c' * 40)
        with self.assertRaisesRegex(ValueError, 'README'):
            self.module.verify(self.root)

    def test_published_source_cannot_be_called_unpublished(self):
        self.replace('README.md', f'The working package matches published **1.2.3**, released from commit `{SHA}`.', 'The working source is **1.2.3, an unpublished combined candidate**.')
        with self.assertRaisesRegex(ValueError, 'README'):
            self.module.verify(self.root)

    def test_newer_explicit_candidate_is_allowed(self):
        self.write('plugins/ibm-design-language/plugin.json', '{"version":"1.2.4"}')
        self.write('scripts/verify.py', "CURRENT = '1.2.4'\n")
        self.replace('docs/RELEASING.md', '(currently 1.2.3)', '(currently 1.2.4)')
        self.replace('README.md', f'The working package matches published **1.2.3**, released from commit `{SHA}`.', 'The working source is **1.2.4, an unpublished combined candidate**.')
        self.replace('README.md', 'the published 1.2.3 package source', 'the unpublished 1.2.4 working source')
        self.assertEqual(self.module.verify(self.root)['source_version'], '1.2.4')

    def test_historical_notes_and_rollback_versions_are_ignored(self):
        self.write('releases/1.2.3/NOTES.md', '# 1.2.3 unpublished preparation notes\n')
        self.assertEqual(self.module.verify(self.root)['status'], 'pass')

    def test_latest_release_mismatch_is_not_an_offline_pass(self):
        with patch.object(self.module, 'github_json', return_value={'tag_name': 'v1.2.4', 'draft': False, 'prerelease': False}):
            with self.assertRaisesRegex(ValueError, 'latest'):
                self.module.verify(self.root, online=True)

    def test_online_lightweight_and_annotated_tags(self):
        release = {'tag_name': 'v1.2.3', 'draft': False, 'prerelease': False, 'html_url': URL}
        for annotated in [False, True]:
            with self.subTest(annotated=annotated):
                replies = [release, {'object': {'type': 'tag' if annotated else 'commit', 'sha': 'd' * 40 if annotated else SHA}}]
                if annotated:
                    replies.append({'object': {'type': 'commit', 'sha': SHA}})
                with patch.object(self.module, 'github_json', side_effect=replies):
                    self.assertEqual(self.module.verify(self.root, online=True)['publication'], 'verified (GitHub release and tag)')

    def test_wrong_remote_commit_is_rejected(self):
        replies = [{'tag_name': 'v1.2.3', 'draft': False, 'prerelease': False, 'html_url': URL}, {'object': {'type': 'commit', 'sha': 'c' * 40}}]
        with patch.object(self.module, 'github_json', side_effect=replies):
            with self.assertRaisesRegex(ValueError, 'commit'):
                self.module.verify(self.root, online=True)

    def test_api_failure_is_not_reported_as_success(self):
        with patch.object(self.module, 'github_json', side_effect=URLError('unavailable')):
            with self.assertRaises(URLError):
                self.module.verify(self.root, online=True)

    def test_checkout_documentation_passes_offline(self):
        self.assertEqual(self.module.verify(ROOT)['status'], 'pass')


if __name__ == '__main__':
    unittest.main()

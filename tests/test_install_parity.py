from pathlib import Path
import hashlib
import importlib.util
import copy
import json
import tempfile
import unittest

SPEC = importlib.util.spec_from_file_location(
    'install_parity', Path(__file__).resolve().parents[1] / 'scripts/verify-install.py')
MODULE = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(MODULE)


class InstallParityTest(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.root = Path(self.temp.name)
        (self.root / 'plugin.json').write_bytes(b'original')
        self.expected = {'plugin.json': hashlib.sha256(b'original').hexdigest()}

    def test_matching_installation(self):
        self.assertEqual(MODULE.compare_install(self.root, self.expected)['status'], 'pass')

    def test_changed_file_is_preserved_and_reported(self):
        (self.root / 'plugin.json').write_bytes(b'local edit')
        result = MODULE.compare_install(self.root, self.expected)
        self.assertEqual(result['status'], 'fail')
        self.assertEqual(result['changed'], ['plugin.json'])
        self.assertEqual((self.root / 'plugin.json').read_bytes(), b'local edit')

    def test_missing_file(self):
        (self.root / 'plugin.json').unlink()
        self.assertEqual(MODULE.compare_install(self.root, self.expected)['missing'], ['plugin.json'])

    def test_extra_nested_file(self):
        (self.root / 'notes').mkdir()
        (self.root / 'notes/local.md').write_text('preserve me')
        self.assertEqual(MODULE.compare_install(self.root, self.expected)['extra'], ['notes/local.md'])
        self.assertTrue((self.root / 'notes/local.md').exists())

    def test_missing_installation(self):
        with self.assertRaises(ValueError):
            MODULE.compare_install(self.root / 'absent', self.expected)

    def test_directory_symlink_is_rejected(self):
        target = self.root / 'target'
        target.mkdir()
        link = self.root / 'link'
        try:
            link.symlink_to(target, target_is_directory=True)
        except OSError:
            self.skipTest('Symlink creation unavailable on this host')
        with self.assertRaises(ValueError):
            MODULE.compare_install(link, {})


class UploadedInstallParityTest(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.root = Path(self.temp.name)
        source = {'name': 'fixture', 'version': '1.2.3', 'description': 'Fixture plugin'}
        (self.root / 'plugin.json').write_text(json.dumps(source))
        self.expected = {'plugin.json': hashlib.sha256(
            (self.root / 'plugin.json').read_bytes()).hexdigest()}
        self.metadata = {
            'name': 'fixture', 'version': '1.2.3', 'description': 'Fixture plugin',
            'author': {'name': 'Workspace upload'},
            'interface': {'displayName': 'fixture', 'shortDescription': 'Fixture plugin',
                          'longDescription': 'Fixture plugin', 'developerName': 'Workspace upload',
                          'category': 'Other', 'capabilities': [], 'defaultPrompt': None},
            'keywords': [], 'skills': './skills',
        }
        (self.root / '.codex-plugin').mkdir()
        self.overlay = self.root / '.codex-plugin/plugin.json'
        self.overlay.write_text(json.dumps(self.metadata))

    def test_recognized_upload_metadata_is_reported_separately(self):
        result = MODULE.compare_install(self.root, self.expected)
        self.assertEqual(result['status'], 'pass')
        self.assertEqual(result['extra'], [])
        self.assertEqual(result['host_metadata'], ['.codex-plugin/plugin.json'])
        self.assertEqual(json.loads(self.overlay.read_text()), self.metadata)

    def test_unrecognized_metadata_is_not_exempt(self):
        for key, value in (('name', 'other'), ('version', '0.0.0'),
                           ('description', 'different'), ('skills', '../elsewhere'),
                           ('mcpServers', {'unexpected': {}}), ('apps', ['unexpected']),
                           ('interface', {'defaultPrompt': 'Unexpected instructions'})):
            with self.subTest(key=key):
                metadata = copy.deepcopy(self.metadata)
                metadata[key] = value
                self.overlay.write_text(json.dumps(metadata))
                result = MODULE.compare_install(self.root, self.expected)
                self.assertEqual(result['status'], 'fail')
                self.assertEqual(result['extra'], ['.codex-plugin/plugin.json'])

    def test_invalid_metadata_json_is_not_exempt(self):
        for value in ('not JSON', 'null', '[]', '{}'):
            with self.subTest(value=value):
                self.overlay.write_text(value)
                self.assertEqual(MODULE.compare_install(self.root, self.expected)['status'], 'fail')

    def test_release_owned_metadata_stays_hash_checked(self):
        self.expected['.codex-plugin/plugin.json'] = hashlib.sha256(b'release-owned').hexdigest()
        result = MODULE.compare_install(self.root, self.expected)
        self.assertEqual(result['status'], 'fail')
        self.assertEqual(result['changed'], ['.codex-plugin/plugin.json'])
        self.assertEqual(result['host_metadata'], [])

    def test_host_metadata_does_not_hide_release_drift_or_other_extras(self):
        (self.root / 'extra.txt').write_text('preserve')
        result = MODULE.compare_install(self.root, self.expected)
        self.assertEqual(result['status'], 'fail')
        self.assertEqual(result['extra'], ['extra.txt'])
        (self.root / 'plugin.json').write_text(json.dumps(
            {'name': 'fixture', 'version': '1.2.4', 'description': 'Fixture plugin'}))
        result = MODULE.compare_install(self.root, self.expected)
        self.assertEqual(result['status'], 'fail')
        self.assertEqual(result['changed'], ['plugin.json'])

    def test_metadata_symlink_is_rejected(self):
        self.overlay.unlink()
        try:
            self.overlay.symlink_to(self.root / 'plugin.json')
        except OSError:
            self.skipTest('Symlink creation unavailable on this host')
        with self.assertRaises(ValueError):
            MODULE.compare_install(self.root, self.expected)


if __name__ == '__main__':
    unittest.main()

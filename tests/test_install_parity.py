from pathlib import Path
import hashlib
import importlib.util
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


if __name__ == '__main__':
    unittest.main()

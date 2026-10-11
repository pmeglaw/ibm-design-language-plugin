"""Exercise contrast CLI input validation and its build-gate exit codes."""
from pathlib import Path
import json
import subprocess
import sys
import tempfile
import unittest

SCRIPT = (Path(__file__).resolve().parents[1] /
          'plugins/ibm-design-language/skills/design-ui/scripts/check_contrast.py')


class ContrastInputTest(unittest.TestCase):
    def run_pairs(self, payload):
        return subprocess.run([sys.executable, '-B', str(SCRIPT), '--pairs', '-'],
                              input=json.dumps(payload), capture_output=True, text=True)

    def test_empty_or_non_array_input_cannot_pass(self):
        for payload in ([], {}, '', None, 42, {'fg': 'black', 'bg': 'white'}):
            with self.subTest(payload=payload):
                result = self.run_pairs(payload)
                self.assertEqual(result.returncode, 2)
                self.assertIn('error:', result.stderr)
                self.assertNotIn('pass', result.stdout)

    def test_malformed_pairs_are_rejected_before_any_result(self):
        valid = {'fg': 'black', 'bg': 'white'}
        for pair in (None, [], 'black', {}, {'fg': 'black'},
                     {'fg': None, 'bg': 'white'}, {'fg': 123, 'bg': 'white'},
                     {'fg': 'unknown', 'bg': 'white'},
                     {'fg': 'black', 'bg': 'white', 'kind': []},
                     {'fg': 'black', 'bg': 'white', 'kind': 'typo'},
                     {'fg': 'black', 'bg': 'white', 'name': None}):
            with self.subTest(pair=pair):
                result = self.run_pairs([valid, pair])
                self.assertEqual(result.returncode, 2)
                self.assertIn('error:', result.stderr)
                self.assertNotIn('Traceback', result.stderr)
                self.assertEqual(result.stdout, '')

    def test_valid_pairs_preserve_contrast_exit_codes(self):
        for bg, expected in (('white', 0), ('black', 1)):
            with self.subTest(bg=bg):
                result = self.run_pairs([{'fg': 'black', 'bg': bg}])
                self.assertEqual(result.returncode, expected)
                self.assertEqual(result.stderr, '')

    def test_json_file_input(self):
        with tempfile.TemporaryDirectory() as directory:
            source = Path(directory) / 'pairs.json'
            source.write_text('[{"fg":"black","bg":"white","kind":"graphic"}]')
            result = subprocess.run([sys.executable, '-B', str(SCRIPT), '--pairs', str(source)],
                                    capture_output=True, text=True)
            self.assertEqual(result.returncode, 0)
            self.assertIn('1/1 pass', result.stdout)


if __name__ == '__main__':
    unittest.main()

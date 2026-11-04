"""Packaged Markdown anchors resolve to GitHub-style heading slugs."""
from pathlib import Path
import importlib.util
import unittest

ROOT = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location('package_verifier', ROOT / 'scripts/verify.py')
verifier = importlib.util.module_from_spec(spec)
spec.loader.exec_module(verifier)


class AnchorSlugTest(unittest.TestCase):
    def test_github_slug_rules(self):
        text = ('# Release gates\n'
                '## Hybrid and expressive brand decisions — local guidance\n'
                '### What good looks like: header benchmark\n'
                '## `Code` and *emphasis*\n'
                '## Repeated\n## Repeated\n'
                '```\n# not a heading\n```\n')
        self.assertEqual(verifier.anchor_slugs(text), {
            'release-gates', 'hybrid-and-expressive-brand-decisions--local-guidance',
            'what-good-looks-like-header-benchmark', 'code-and-emphasis',
            'repeated', 'repeated-1'})

    def test_entry_point_routes_to_moved_benchmarks(self):
        skill = ROOT / 'plugins/ibm-design-language/skills/design-ui'
        self.assertIn('references/release-gates.md#composition-benchmarks',
                      (skill / 'SKILL.md').read_text(encoding='utf-8'))
        gates = (skill / 'references/release-gates.md').read_text(encoding='utf-8')
        self.assertIn('composition-benchmarks', verifier.anchor_slugs(gates))
        for anchor in ('ui-shell.md#what-good-looks-like-header-benchmark',
                       'composition.md#what-good-looks-like-data-table-benchmark',
                       'forms-and-upload.md#what-good-looks-like-search-benchmark',
                       'forms-and-upload.md#what-good-looks-like-form-benchmark'):
            self.assertIn(anchor, gates)


if __name__ == '__main__':
    unittest.main()

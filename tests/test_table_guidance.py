"""Static guidance contracts; these do not evaluate generated UI behavior."""
from pathlib import Path
import re
import unittest

ROOT = Path(__file__).resolve().parents[1]
REFS = ROOT / 'plugins/ibm-design-language/skills/design-ui/references'


class TableGuidanceTest(unittest.TestCase):
    def test_no_navigation_rendering_substitution_or_blanket_overflow(self):
        # Search active guidance, not frozen release/history evidence.
        forbidden = (
            r'infinite scroll or virtualization',
            r'switch to virtualization only if',
            r'primary visible, secondary in (?:an )?overflow',
            r'keep secondary choices in overflow',
        )
        for path in REFS.glob('*.md'):
            if path.name == 'evaluation-history.md':
                continue
            for pattern in forbidden:
                with self.subTest(file=path.name, pattern=pattern):
                    self.assertNotRegex(path.read_text(encoding='utf-8').lower(), pattern)

    def test_each_navigation_entry_preserves_independent_rendering_choice(self):
        senior = (REFS / 'senior-workflow.md').read_text(encoding='utf-8')
        composition = (REFS / 'composition.md').read_text(encoding='utf-8')
        entries = [next(line for line in senior.splitlines() if line.startswith(prefix))
                   for prefix in ('| Pagination |', '*Components:*')]
        entries.append(next(line for line in composition.splitlines()
                            if line.startswith('- **Choose collection navigation')))
        for entry in entries:
            with self.subTest(entry=entry):
                self.assertIn('pagination', entry.lower())
                self.assertIn('virtualization', entry.lower())
                self.assertIn('installed component supports', entry)
                self.assertRegex(entry, r'rendering (?:performance|cost|strategy)')

    def test_both_disclosure_entry_points_preserve_frequent_actions(self):
        text = (REFS / 'senior-workflow.md').read_text(encoding='utf-8')
        for prefix in ('7. **Progressive disclosure.', '| Discoverability vs. simplicity |'):
            line = next(line for line in text.splitlines() if line.startswith(prefix))
            self.assertIn('frequently used secondary actions visible', line)
            self.assertIn('less frequent contextual commands', line)
        craft = (REFS / 'composition-craft.md').read_text(encoding='utf-8')
        self.assertIn('reserve overflow for less frequent contextual choices', craft)

    def test_acceptance_covers_runtime_risks_without_claiming_a_pass(self):
        text = (REFS / 'composition.md').read_text(encoding='utf-8')
        section = text.split('### Collection navigation, rendering and action acceptance\n')[1]
        section = section.split('\n## Pagination detail contract')[0]
        for requirement in ('DOM/rendering cost', 'Pagination can coexist',
                            'stable record IDs', 'select-all', 'scroll restoration',
                            'failed fetch', 'row recycling', 'ordinary',
                            'Tab navigation', 'Escape', 'focus return',
                            'keyboard and touch', 'up to five actions',
                            'fewer than three row actions', 'assistive-technology',
                            'Unavailable checks remain', 'untested'):
            with self.subTest(requirement=requirement):
                self.assertIn(requirement, section)
        self.assertIn('not new Carbon API guarantees or fixture passes', section)

    def test_batch_mode_preserves_conflicting_row_action_restriction(self):
        text = (REFS / 'composition.md').read_text(encoding='utf-8')
        section = text.split('- **Discoverability:**')[1].split('\n\n')[0]
        normalized = ' '.join(section.split())
        self.assertIn('actions applicable to the current mode', normalized)
        self.assertIn('disable conflicting single-row actions and menus', normalized)
        self.assertIn('appropriate focus on exit', normalized)

    def test_keyboard_contract_distinguishes_table_and_datagrid(self):
        text = (REFS / 'composition.md').read_text(encoding='utf-8')
        section = ' '.join(text.split('- **Keyboard and focus:**')[1].split('- **Discoverability:**')[0].split())
        self.assertIn('ordinary semantic table', section)
        self.assertIn('Tab navigation', section)
        self.assertIn('datagrid, follow its supported entry, arrow-key traversal and cell-action contract', section)
        self.assertIn('do not make every cell a Tab stop', section)

    def test_worked_example_routes_to_acceptance_and_links_resolve(self):
        text = (REFS / 'senior-workflow.md').read_text(encoding='utf-8')
        self.assertIn('composition.md#collection-navigation-rendering-and-action-acceptance', text)
        for name in ('senior-workflow.md', 'composition.md', 'composition-craft.md'):
            path = REFS / name
            for target in re.findall(r'\]\(([^)]+)\)', path.read_text(encoding='utf-8')):
                if '://' in target or target.startswith('#'):
                    continue
                with self.subTest(file=name, target=target):
                    self.assertTrue((path.parent / target.split('#')[0]).exists())


if __name__ == '__main__':
    unittest.main()

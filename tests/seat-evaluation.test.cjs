const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { spawnSync } = require('node:child_process');
const adapter = require('../scripts/prepare_seat_evaluation.cjs');
const repo = path.resolve(__dirname, '..');
const original = JSON.parse(fs.readFileSync(path.join(repo, adapter.SCENARIOS), 'utf8'));

test('all ten original prompts, activation expectations and outcomes survive conversion', () => {
  const suite = adapter.convert(original);
  assert.equal(suite.schema_version, 2);
  assert.equal(suite.evals.length, 10);
  suite.evals.forEach((c, i) => {
    const source = original.cases[i];
    assert.equal(c.id, i + 1);
    assert.equal(c.source_id, source.id);
    assert.equal(c.prompt, source.prompt);
    assert.equal(c.expected_activation, source.expected_activation);
    assert.deepEqual(c.assertions.slice(1).map(a => a.criterion), source.expected_outcomes);
    assert.equal(c.kind, 'guidance');
    assert.deepEqual(c.visual_dimensions, []);
  });
  assert.equal(suite.execution_status, 'not_run');
});

test('reject schema drift, duplicate IDs, missing cases, malformed activation and outcomes', () => {
  for (const mutate of [
    s => s.schema_version = 2,
    s => s.cases[1].id = s.cases[0].id,
    s => s.cases.pop(),
    s => s.cases[0].expected_activation = 'true',
    s => s.cases[0].expected_outcomes = [],
    s => s.cases[0].prompt = '',
  ]) {
    const s = structuredClone(original);
    mutate(s);
    assert.throws(() => adapter.convert(s));
  }
});

test('stage full same-plugin companions and routing catalog without editing source', () => {
  const temp = fs.mkdtempSync(path.join(os.tmpdir(), 'seat-adapter-test-'));
  try {
    const staged = path.join(temp, 'staged');
    const before = fs.readFileSync(path.join(repo, adapter.SCENARIOS));
    adapter.stage(repo, staged);
    assert.deepEqual(fs.readFileSync(path.join(repo, adapter.SCENARIOS)), before);
    for (const name of adapter.SKILLS) {
      assert.deepEqual(fs.readFileSync(path.join(staged, 'bundle', name, 'SKILL.md')),
        fs.readFileSync(path.join(repo, 'plugins/ibm-design-language/skills', name, 'SKILL.md')));
    }
    const router = fs.readFileSync(path.join(staged, 'bundle/SKILL.md'), 'utf8');
    assert.match(router, /Select only skills whose descriptions apply/);
    assert.doesNotMatch(router, /expected_activation|expected_outcomes/);
    assert.throws(() => adapter.stage(repo, staged), /exist/);
    assert.throws(() => adapter.stage(repo, path.join(repo, 'forbidden')), /outside/);
  } finally { fs.rmSync(temp, { recursive: true, force: true }); }
});

test('missing companion fails before writing output', () => {
  const temp = fs.mkdtempSync(path.join(os.tmpdir(), 'seat-missing-test-'));
  try {
    const source = path.join(temp, 'repo');
    const seat = path.join(source, path.dirname(adapter.SCENARIOS));
    fs.mkdirSync(seat, { recursive: true });
    fs.writeFileSync(path.join(seat, 'evaluation-cases.json'), JSON.stringify(original));
    fs.writeFileSync(path.join(seat, 'SKILL.md'), '---\nname: seat-planner-ui-ux\ndescription: Test\n---');
    const output = path.join(temp, 'output');
    assert.throws(() => adapter.stage(source, output), /dependency/);
    assert.equal(fs.existsSync(output), false);
  } finally { fs.rmSync(temp, { recursive: true, force: true }); }
});

test('real Python evaluator prepares all packets with companions and reports ten not_run', {
  skip: !process.env.SEAT_EVAL_PYTHON && 'Set SEAT_EVAL_PYTHON for Python integration (required in CI)'
}, () => {
  const temp = fs.mkdtempSync(path.join(os.tmpdir(), 'seat-python-test-'));
  try {
    const staged = path.join(temp, 'staged');
    adapter.stage(repo, staged);
    const evaluator = path.join(repo, 'plugins/ibm-design-language/skills/design-ui/scripts/evaluate.py');
    const results = path.join(temp, 'results');
    const run = args => {
      const r = spawnSync(process.env.SEAT_EVAL_PYTHON, ['-B', evaluator, ...args], { encoding: 'utf8' });
      assert.equal(r.error, undefined);
      return r;
    };
    const prepared = run(['prepare', '--skill-root', path.join(staged, 'bundle'), '--suite',
      path.join(staged, 'suite.json'), '--results-root', results, '--model', 'gpt-6.1-sol',
      '--reasoning', 'medium', '--context-file', path.join(repo, 'scripts/prepare_seat_evaluation.cjs')]);
    assert.equal(prepared.status, 0, prepared.stderr);
    const manifest = JSON.parse(prepared.stdout);
    for (const name of adapter.SKILLS) assert.ok(manifest.skill_files[name + '/SKILL.md']);
    const report = run(['report', '--results-root', results]);
    assert.equal(report.status, 1);
    assert.deepEqual(JSON.parse(report.stdout).counts, { not_run: 10 });
    fs.appendFileSync(path.join(results, 'snapshot/seat-planner-ui-ux/SKILL.md'), '\nchanged');
    assert.equal(run(['report', '--results-root', results]).status, 2);
  } finally { fs.rmSync(temp, { recursive: true, force: true }); }
});

#!/usr/bin/env node
// Repository-only bridge; never modifies packaged skills or invokes a model.
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const SKILLS = ['design-ui', 'review-product-experience', 'seat-planner-ui-ux'];
const SCENARIOS = 'plugins/ibm-design-language/skills/seat-planner-ui-ux/evaluation-cases.json';
const CASE_IDS = ['explicit-review', 'bounded-implementation', 'map-drift', 'unavailable-browser',
  'version-authority', 'production-qa', 'generic-carbon', 'other-product', 'repository-status',
  'ambiguous-follow-up'];
const sha = bytes => crypto.createHash('sha256').update(bytes).digest('hex');
const nonempty = value => typeof value === 'string' && value.trim().length > 0;

function convert(source) {
  if (source.schema_version !== 1 || source.skill !== 'seat-planner-ui-ux' ||
      !Array.isArray(source.cases) || source.cases.length !== CASE_IDS.length) {
    throw new Error('Expected the ten authored schema version 1 Seat Planner cases');
  }
  const cases = source.cases.map((c, i) => {
    if (c.id !== CASE_IDS[i] || !nonempty(c.prompt) || typeof c.expected_activation !== 'boolean' ||
        !Array.isArray(c.expected_outcomes) || !c.expected_outcomes.length ||
        !c.expected_outcomes.every(nonempty)) throw new Error('Invalid authored case: ' + c.id);
    return {
      id: i + 1, source_id: c.id, prompt: c.prompt, expected_activation: c.expected_activation,
      kind: 'guidance', visual_dimensions: [],
      context: 'This is an isolated behavioral evaluation. No live product repository, browser, ' +
        'credentials or production target is supplied. Do available work and report unavailable ' +
        'evidence explicitly. Treat any conversation described in the request as supplied history. ' +
        'Include your selected skill names and reason in the response summary; tool events must ' +
        'support claims that skill files were read.',
      assertions: [
        { id: 'activation', criterion: c.expected_activation ?
          'Select and read seat-planner-ui-ux when applicable; use required same-snapshot companions for the task.' :
          'Do not activate or read the Seat Planner skill or its product contract for this excluded task.' },
        ...c.expected_outcomes.map((criterion, j) => ({ id: 'outcome-' + (j + 1), criterion })),
      ],
    };
  });
  return { schema_version: 2, skill: 'seat-planner-ui-ux', execution_status: 'not_run',
    method: 'Routing catalog plus unchanged same-plugin skill trees; guidance-only, not product QA.',
    evals: cases };
}

function hashes(root, relative = '') {
  const result = {};
  for (const entry of fs.readdirSync(path.join(root, relative), { withFileTypes: true })) {
    const key = relative ? relative + '/' + entry.name : entry.name;
    const full = path.join(root, key);
    if (fs.lstatSync(full).isSymbolicLink()) throw new Error('Linked source rejected: ' + key);
    if (entry.isDirectory()) Object.assign(result, hashes(root, key));
    else if (entry.isFile()) result[key] = sha(fs.readFileSync(full));
    else throw new Error('Nonregular source rejected: ' + key);
  }
  return Object.fromEntries(Object.entries(result).sort(([a], [b]) => a.localeCompare(b)));
}

function stage(repository, output) {
  repository = fs.realpathSync(repository);
  output = path.resolve(output);
  // Existing ancestors must not redirect a seemingly external output into the repository.
  let ancestor = path.dirname(output);
  while (!fs.existsSync(ancestor)) ancestor = path.dirname(ancestor);
  output = path.join(fs.realpathSync(ancestor), path.relative(ancestor, output));
  const relative = path.relative(repository, output);
  if (!relative || (!relative.startsWith('..' + path.sep) && !path.isAbsolute(relative))) {
    throw new Error('Stage output must be outside the repository');
  }
  if (fs.existsSync(output)) throw new Error('Output already exists; use a fresh directory');
  const skillsRoot = path.join(repository, 'plugins/ibm-design-language/skills');
  const authoredBytes = fs.readFileSync(path.join(repository, SCENARIOS));
  const suite = convert(JSON.parse(authoredBytes.toString('utf8')));
  const descriptions = {};
  const sourceHashes = {};
  for (const name of SKILLS) {
    const source = path.join(skillsRoot, name);
    if (!fs.existsSync(path.join(source, 'SKILL.md')) || fs.lstatSync(source).isSymbolicLink()) {
      throw new Error('Missing or linked skill dependency: ' + name);
    }
    const skill = fs.readFileSync(path.join(source, 'SKILL.md'), 'utf8');
    const match = skill.match(/^description: (.+)$/m);
    if (!match) throw new Error('Missing skill description: ' + name);
    descriptions[name] = match[1];
    sourceHashes[name] = hashes(source);
  }
  fs.mkdirSync(path.join(output, 'bundle'), { recursive: true });
  for (const name of SKILLS) {
    const destination = path.join(output, 'bundle', name);
    fs.cpSync(path.join(skillsRoot, name), destination, { recursive: true, dereference: false });
    if (JSON.stringify(hashes(destination)) !== JSON.stringify(sourceHashes[name])) {
      throw new Error('Source changed while staging: ' + name);
    }
  }
  const router = '# Evaluation routing catalog\n\n' +
    'Select only skills whose descriptions apply to the request. Read each selected SKILL.md ' +
    'and follow its relevant references and companion requirements from this bundle. ' +
    'Do not substitute installed copies. Report selected skill names and reasons. ' +
    'An unavailable repository-review skill may be reported as a limitation.\n\n' +
    SKILLS.map(name => '- ' + name + ': ' + descriptions[name] +
      '\n  Entrypoint: [' + name + '/SKILL.md](' + name + '/SKILL.md)').join('\n') + '\n';
  fs.writeFileSync(path.join(output, 'bundle/SKILL.md'), router);
  fs.writeFileSync(path.join(output, 'suite.json'), JSON.stringify(suite, null, 2) + '\n');
  const provenance = {
    schema_version: 1, execution_status: 'not_run',
    authored_sha256: sha(authoredBytes), adapter_sha256: sha(fs.readFileSync(__filename)),
    source_files: sourceHashes, case_ids: suite.evals.map(c => ({ id: c.id, source_id: c.source_id })),
    limits: 'Staging is structural evidence only; no model executed. Expected outcomes are not embedded in the model request; authored source is not a concealed holdout.',
  };
  fs.writeFileSync(path.join(output, 'provenance.json'), JSON.stringify(provenance, null, 2) + '\n');
  return provenance;
}

module.exports = { convert, stage, hashes, SKILLS, SCENARIOS };
if (require.main === module) {
  try {
    if (process.argv.length !== 4) throw new Error('Usage: node scripts/prepare_seat_evaluation.cjs REPOSITORY FRESH_EXTERNAL_STAGE');
    console.log(JSON.stringify(stage(process.argv[2], process.argv[3]), null, 2));
  } catch (error) { console.error(error.message); process.exitCode = 2; }
}

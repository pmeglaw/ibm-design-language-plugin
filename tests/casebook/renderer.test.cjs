const { test, before, after } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { pathToFileURL } = require('node:url');
const deps = process.env.CASEBOOK_TEST_DEPS || path.resolve(__dirname, '../../.verification/nextjs-shell');
const { chromium } = require(require.resolve('playwright', { paths: [deps] }));
const assets = path.resolve(__dirname, '../../plugins/ibm-design-language/skills/ibm-design-language/assets/casebook');
const cases = JSON.parse(fs.readFileSync(path.join(assets, 'cases.json'), 'utf8'));
let browser;
before(async () => { browser = await chromium.launch(); });
after(async () => { await browser?.close(); });
async function viewer(t) {
  const page = await browser.newPage();
  t.after(() => page.close());
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto(pathToFileURL(path.join(assets, 'index.html')).href);
  t.after(() => assert.deepEqual(errors, []));
  return page;
}

for (const c of cases) for (const theme of ['white', 'g100']) for (const width of ['desktop', 'mobile']) {
  test(`${c.id} ${theme} ${width} preserves content and offline resources`, async t => {
    const page = await viewer(t);
    await page.selectOption('#case', c.id);
    await page.selectOption('#theme', theme);
    await page.selectOption('#width', width);
    assert.equal(await page.locator('.case-heading h2').textContent(), c.title);
    assert.equal(await page.locator('.case-heading p').textContent(), `Task: ${c.task}`);
    assert.equal(await page.locator('.annotations article').count(), c.annotations.length);
    assert.deepEqual(await page.locator('.annotations article h3').allTextContents(), c.annotations.map((a, i) => `${i + 1}${a.title}`));
    assert.deepEqual(await page.locator('.source-list a').evaluateAll(nodes => nodes.map(n => [n.textContent, n.getAttribute('href')])), c.sources);
    assert.equal(await page.locator('.compare').getAttribute('class'), `compare ${width}`);
    for (const variant of ['before', 'after']) {
      const image = page.locator(`img[src="screens/${c.id}-${variant}-${theme}-${width}.png"]`);
      assert.equal(await image.count(), 1);
      await image.evaluate(img => img.decode());
      assert.ok(await image.evaluate(img => img.naturalWidth > 0));
      const href = `studies/${c.id}-${variant}.html?theme=${theme}`;
      assert.equal(await page.locator(`.study-links a[href="${href}"]`).count(), 1);
      assert.ok(fs.existsSync(path.join(assets, 'studies', `${c.id}-${variant}.html`)));
    }
  });
}

for (const control of ['width', 'theme', 'case']) {
  test(`rejects hostile ${control} selection and permits recovery`, async t => {
    const page = await viewer(t);
    await page.evaluate(id => {
      const select = document.getElementById(id);
      select.options[select.selectedIndex].value = '\"><img src=x onerror="window.__injected=1">';
      select.dispatchEvent(new Event('change'));
    }, control);
    assert.equal(await page.locator('#content img[src=x]').count(), 0);
    assert.equal(await page.locator('#content [role=alert]').count(), 1);
    assert.equal(await page.evaluate(() => window.__injected), undefined);
    await page.evaluate(id => {
      const select = document.getElementById(id);
      select.options[select.selectedIndex].value = { width: 'desktop', theme: 'white', case: 'table' }[id];
      select.dispatchEvent(new Event('change'));
    }, control);
    assert.equal(await page.locator('.compare img').count(), 2);
  });
}

test('renders hostile annotation text literally and rejects executable URLs', async t => {
  const page = await viewer(t);
  const literal = '<img src=x onerror="window.__injected=1"> &quot; <svg onload="window.__injected=2">';
  await page.evaluate(text => {
    const c = window.CASEBOOK[0];
    c.title = c.type = c.before = c.annotations[0].why = text;
    c.sources = [['Script', 'javascript:window.__injected=3'], ['Encoded', 'java\nscript:window.__injected=4'], ['Data', 'data:text/html,test'], ['Valid', 'https://example.com/path?q=%22%3E']];
    document.getElementById('theme').dispatchEvent(new Event('change'));
  }, literal);
  assert.equal(await page.locator('.case-heading h2').textContent(), literal);
  assert.equal(await page.locator('#content img[src=x], #content svg, #content [onerror], #content [onload]').count(), 0);
  assert.deepEqual(await page.locator('.source-list a').evaluateAll(nodes => nodes.map(n => n.getAttribute('href'))), ['https://example.com/path?q=%22%3E']);
  assert.equal(await page.locator('.source-list').textContent().then(text => (text.match(/unavailable reference/g) || []).length), 3);
  assert.equal(await page.evaluate(() => window.__injected), undefined);
});

test('rejects traversal IDs and encoded invalid values without silently defaulting', async t => {
  const page = await viewer(t);
  for (const value of ['../outside', '%3Csvg%20onload=alert(1)%3E', '']) {
    await page.evaluate(value => {
      window.CASEBOOK[0].id = value;
      const select = document.getElementById('case');
      select.options[0].value = value;
      select.selectedIndex = 0;
      select.dispatchEvent(new Event('change'));
    }, value);
    assert.equal(await page.locator('#content [role=alert]').count(), 1);
    assert.equal(await page.locator('#content a, #content img').count(), 0);
  }
});

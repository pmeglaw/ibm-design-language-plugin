// Keep package data and control values out of the HTML parser. This classic
// script intentionally supports opening the bundled viewer directly offline.
(() => {
  'use strict';
  const select = document.getElementById('case');
  const theme = document.getElementById('theme');
  const width = document.getElementById('width');
  const content = document.getElementById('content');
  const caseIds = ['table', 'form', 'dashboard', 'settings', 'expressive'];
  const themes = ['white', 'g100'];
  const widths = ['desktop', 'mobile'];

  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }
  function labeledParagraph(label, text, className) {
    const p = element('p', className);
    p.append(element('strong', '', label), ` ${text}`);
    return p;
  }
  function reference(label, href) {
    try {
      const url = new URL(href);
      if (url.protocol === 'https:' && !url.username && !url.password) {
        const a = element('a', '', label);
        a.href = url.href;
        return a;
      }
    } catch { /* Malformed references remain readable without a link. */ }
    return element('span', '', `${label} (unavailable reference)`);
  }

  window.CASEBOOK.forEach((c, i) => {
    const option = element('option', '', `${String(i + 1).padStart(2, '0')} / ${c.type}`);
    option.value = c.id;
    select.append(option);
  });

  function render() {
    // Use canonical package constants downstream, never the DOM strings.
    const id = caseIds.find(value => value === select.value);
    const t = themes.find(value => value === theme.value);
    const w = widths.find(value => value === width.value);
    const c = window.CASEBOOK.find(item => item.id === id);
    if (!id || !t || !w || !c) {
      const error = element('p', '', 'Choose a valid study, theme, and capture size.');
      error.setAttribute('role', 'alert');
      content.replaceChildren(error);
      return;
    }
    document.documentElement.dataset.theme = t;
    const heading = element('section', 'case-heading');
    const title = element('h2', '', c.title);
    title.setAttribute('aria-live', 'polite');
    heading.append(element('div', 'eyebrow', c.type), title, labeledParagraph('Task:', c.task));

    function figure(variant, label, description) {
      const node = element('figure');
      const caption = element('figcaption');
      caption.append(element('strong', '', label), description);
      const src = `screens/${id}-${variant}-${t}-${w}.png`;
      const link = element('a', 'image-link');
      link.href = src;
      link.setAttribute('aria-label', `Open ${label.toLowerCase()} capture`);
      const image = element('img');
      image.src = src;
      image.alt = `${c.type} ${label.toLowerCase()} composition at ${w} width; numbered annotations explained below.`;
      link.append(image);
      node.append(caption, link);
      return node;
    }
    const compare = element('div', `compare ${w}`);
    compare.append(figure('before', 'Original', c.before), figure('after', 'Revised', c.after));
    const studies = element('div', 'study-links');
    for (const [variant, label] of [['before', 'original'], ['after', 'revised']]) {
      const a = element('a', '', `Open ${label} study`);
      a.href = `studies/${id}-${variant}.html?theme=${t}`;
      studies.append(a);
    }
    const annotations = element('section', 'annotations');
    annotations.setAttribute('aria-label', 'Design annotations');
    c.annotations.forEach((a, i) => {
      const article = element('article');
      const title = element('h3');
      title.append(element('span', 'pin', String(i + 1)), a.title);
      article.append(title, element('p', '', a.why),
        labeledParagraph('Tradeoff:', a.tradeoff, 'cost'), labeledParagraph('Alternative:', a.alternative));
      annotations.append(article);
    });
    const exercise = element('section', 'exercise');
    exercise.append(element('h3', '', 'Try a different constraint'), element('p', '', c.exercise));
    const sources = element('div', 'source-list');
    sources.append(element('strong', '', 'Reference routes:'), ' ');
    c.sources.forEach(([label, href]) => sources.append(reference(label, href)));
    const note = element('p', 'viewer-note', `${c.scope} The studies use bundled IBM Plex Sans and an author-defined semantic role subset. They are static HTML, not Carbon React component implementations. Product interactions, assistive technology and real browser zoom are not certified. Source guidance informs component/type choices; the comparison judgments and tradeoffs are local craft advice.`);
    content.replaceChildren(heading, compare, studies, annotations, exercise, sources, note);
  }
  [select, theme, width].forEach(control => control.addEventListener('change', render));
  render();
})();

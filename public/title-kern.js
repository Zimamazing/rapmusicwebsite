// R&P title font spacing for titles built one box per letter (owner 2026-11-02).
// Letters in their own inline-block boxes (so each can jump on hover) lose the
// font's pair spacing. This measures each pair - and pairs across a word gap -
// with the font itself and puts the difference on the first letter's right
// margin, in em, so it follows the title's size on every screen.
(function () {
  var FONT = 'Bass Font Straightened';
  var cache = {};
  var probe;

  function width(text, cs) {
    if (!probe) {
      probe = document.createElement('span');
      probe.style.cssText = 'position:absolute;left:-9999px;top:0;visibility:hidden;white-space:pre;' +
        'font-size:200px;letter-spacing:0;font-kerning:normal;padding:0;margin:0;border:0';
      document.body.appendChild(probe);
    }
    probe.style.fontFamily = cs.fontFamily;
    probe.style.fontWeight = cs.fontWeight;
    probe.style.fontStyle = cs.fontStyle;
    probe.textContent = text;
    return probe.getBoundingClientRect().width;
  }

  // Extra space (em) that pair a + gap + b gets when set together.
  function kern(a, gap, b, cs) {
    var key = cs.fontFamily + '|' + cs.fontWeight + '|' + a + '|' + gap + '|' + b;
    if (!(key in cache)) {
      var d = width(a + gap + b, cs) - width(a, cs) - width(b, cs) - (gap ? width(gap, cs) : 0);
      cache[key] = Math.round(d / 200 * 1000) / 1000;
    }
    return cache[key];
  }

  function isLetterBox(el) {
    if (!el || el.nodeType !== 1 || !el.classList) return false;
    if (!el.classList.contains('note') && !el.classList.contains('amp')) return false;
    var cs = getComputedStyle(el);
    return cs.display === 'inline-block' && cs.fontFamily.indexOf(FONT) !== -1 && el.textContent.length === 1;
  }

  function run() {
    // Measure fresh each time: an earlier run may have measured the stand-in
    // font before the title font finished loading.
    cache = {};
    var boxes = document.querySelectorAll('.note, .amp');
    for (var i = 0; i < boxes.length; i++) {
      var a = boxes[i];
      if (!isLetterBox(a)) continue;
      // Next letter box, allowing only white space in between.
      var gap = '';
      var n = a.nextSibling;
      while (n && n.nodeType === 3 && /^\s*$/.test(n.nodeValue)) {
        if (n.nodeValue.length) gap = ' ';
        n = n.nextSibling;
      }
      if (!isLetterBox(n)) continue;
      var csA = getComputedStyle(a);
      if (getComputedStyle(n).fontFamily !== csA.fontFamily) continue;
      var k = kern(a.textContent, gap, n.textContent, csA);
      a.style.marginRight = k ? k + 'em' : '';
    }
  }

  var timer;
  function later() { clearTimeout(timer); timer = setTimeout(run, 50); }

  function start() {
    run();
    if (document.fonts) {
      document.fonts.ready.then(run);
      document.fonts.addEventListener && document.fonts.addEventListener('loadingdone', later);
    }
    // Titles that pages build later (library, conductor) get spaced too.
    if (window.MutationObserver) {
      new MutationObserver(function (list) {
        for (var i = 0; i < list.length; i++) {
          if (list[i].addedNodes.length) { later(); return; }
        }
      }).observe(document.body, { childList: true, subtree: true });
    }
  }

  window.rpKernTitles = run;
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();

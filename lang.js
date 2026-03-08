// lang.js - robust language switcher for EN/中文 using /zh/ prefix
// Behavior:
// - Buttons with class .lang-btn toggle between EN and 中文
// - Computes mapped paths between / and /zh/... directories
// - Attempts a HEAD check for target URL; falls back gracefully if not found
// - Stores preference in localStorage ('en'|'zh')
// - Performs optional safe redirect on root page according to stored preference
(function(){
  'use strict';

  // Normalize pathname to always start with '/'
  function normPath(pathname){
    if (!pathname) return '/';
    return pathname.startsWith('/') ? pathname : '/' + pathname;
  }

  function pathSegments(pathname){
    return pathname.split('/').filter(Boolean);
  }

  function isZhPath(pathname){
    const segs = pathSegments(pathname);
    return segs[0] === 'zh';
  }

  function removeZhPrefix(pathname){
    const segs = pathSegments(pathname);
    if (segs[0] === 'zh') segs.shift();
    return '/' + segs.join('/');
  }

  function buildZhPath(pathname){
    const segs = pathSegments(pathname);
    if (segs.length === 0) return '/zh/index.html';

    // if last segment contains a dot (filename), prepend zh
    const last = segs[segs.length - 1];
    if (last.includes('.')) {
      return '/' + ['zh', ...segs].join('/');
    }
    // else treat as directory -> append index.html
    return '/' + ['zh', ...segs, 'index.html'].join('/');
  }

  function computeTarget(pathname){
    pathname = normPath(pathname);
    if (isZhPath(pathname)){
      // if path is /zh/ or /zh/index.html -> go to root '/index.html' or '/'
      const stripped = removeZhPrefix(pathname);
      if (stripped === '/' || stripped === '/index.html') return '/index.html';
      // ensure leading '/'
      return stripped;
    }

    // not zh -> create zh path
    // root -> /zh/index.html
    if (pathname === '/' || pathname === '/index.html') return '/zh/index.html';

    return buildZhPath(pathname);
  }

  async function checkUrlExists(url){
    try {
      // Use HEAD to check quickly; some servers don't support HEAD -> fallback to GET
      const resp = await fetch(url, {method: 'HEAD'});
      if (resp && resp.ok) return true;
      // if HEAD returns 405, try GET
      if (resp && resp.status === 405){
        const resp2 = await fetch(url, {method: 'GET'});
        return resp2 && resp2.ok;
      }
      return false;
    } catch(e){
      // network/file protocol or CORS issues - unknown, return null to indicate uncertainty
      return null;
    }
  }

  function setButtonText(btn){
    btn.textContent = isZhPath(location.pathname) ? 'EN' : '中文';
  }

  async function onClickHandler(e){
    const target = computeTarget(location.pathname);
    const prefer = target.startsWith('/zh') ? 'zh' : 'en';
    try { localStorage.setItem('preferredLang', prefer); } catch(e){}

    // Try to check existence so we don't land on 404
    const exists = await checkUrlExists(target);
    if (exists === true){
      location.href = target; return;
    }
    if (exists === false){
      // fallback: if target was zh, go to /zh/index.html (if exists), else go to '/'
      if (prefer === 'zh'){
        const fallback = '/zh/index.html';
        const ok = await checkUrlExists(fallback);
        if (ok === true) { location.href = fallback; return; }
      }
      // fallback to english home
      location.href = '/index.html';
      return;
    }
    // exists === null (unknown): go ahead and navigate to target (best effort)
    location.href = target;
  }

  async function init(){
    const buttons = document.querySelectorAll('.lang-btn');
    if (!buttons || !buttons.length) return;

    buttons.forEach(btn => setButtonText(btn));

    buttons.forEach(btn => {
      btn.addEventListener('click', function(e){
        // fire-and-forget async handler, disable button to avoid double-click
        btn.disabled = true;
        onClickHandler(e).finally(() => { btn.disabled = false; });
      });
    });

    // Optional: perform safe redirect based on stored preference
    try {
      const pref = localStorage.getItem('preferredLang');
      if (pref === 'zh' && !isZhPath(location.pathname)){
        // only auto-redirect from root or index to avoid surprising deep-link navigation
        if (location.pathname === '/' || location.pathname === '/index.html'){
          const exists = await checkUrlExists('/zh/index.html');
          if (exists === true){ location.href = '/zh/index.html'; }
        }
      }
      if (pref === 'en' && isZhPath(location.pathname)){
        if (location.pathname === '/zh/' || location.pathname === '/zh/index.html'){
          const exists = await checkUrlExists('/index.html');
          if (exists === true){ location.href = '/index.html'; }
        }
      }
    } catch(e){ /* ignore */ }
  }

  if (document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

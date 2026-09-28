// Ensure the homepage project-section background video keeps playing.
// The `autoplay` attribute alone is frequently blocked inside sandboxed
// preview iframes / without a user gesture, which leaves the video frozen
// on its first frame. This forces a muted play() and retries on the first
// interaction as a last resort.
(function () {
  function kick() {
    var v = document.getElementById("backgroundVideo");
    if (!v) return;
    var p = v.play();
    if (p && typeof p.catch === "function") {
      p.catch(function () {
        /* autoplay blocked — will retry on first interaction */
      });
    }
  }

  // Script is deferred, so the DOM is already parsed here.
  kick();

  var v = document.getElementById("backgroundVideo");
  if (v) {
    v.addEventListener("loadeddata", kick);
    v.addEventListener("canplay", kick);
  }

  function onFirstInteraction() {
    kick();
    window.removeEventListener("pointerdown", onFirstInteraction);
    window.removeEventListener("keydown", onFirstInteraction);
    window.removeEventListener("scroll", onFirstInteraction);
  }
  window.addEventListener("pointerdown", onFirstInteraction);
  window.addEventListener("keydown", onFirstInteraction);
  window.addEventListener("scroll", onFirstInteraction);
})();

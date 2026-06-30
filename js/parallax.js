// js/parallax.js — mouse-driven parallax on hero layers

(function () {
  const hero = document.getElementById('hero');
  if (!hero) return;

  const layers = hero.querySelectorAll('.parallax-layer');
  let mouseX = 0, mouseY = 0;
  let curX = 0, curY = 0;
  let rafId = null;

  function lerp(a, b, t) { return a + (b - a) * t; }

  function tick() {
    curX = lerp(curX, mouseX, 0.06);
    curY = lerp(curY, mouseY, 0.06);

    layers.forEach(layer => {
      const depth = parseFloat(layer.dataset.depth) || 0;
      const moveX = curX * depth * 28;
      const moveY = curY * depth * 18;
      layer.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });

    rafId = requestAnimationFrame(tick);
  }

  function onMouseMove(e) {
    const rect = hero.getBoundingClientRect();
    mouseX = ((e.clientX - rect.left) / rect.width  - 0.5) * 2;
    mouseY = ((e.clientY - rect.top)  / rect.height - 0.5) * 2;
  }

  function start() {
    hero.addEventListener('mousemove', onMouseMove);
    if (!rafId) rafId = requestAnimationFrame(tick);
  }

  function stop() {
    hero.removeEventListener('mousemove', onMouseMove);
    if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
    // spring back to zero
    mouseX = 0; mouseY = 0;
  }

  // Only run when hero is active
  const observer = new MutationObserver(() => {
    if (hero.classList.contains('active')) start();
    else stop();
  });
  observer.observe(hero, { attributes: true, attributeFilter: ['class'] });

  // Start if already active
  if (hero.classList.contains('active')) start();
})();

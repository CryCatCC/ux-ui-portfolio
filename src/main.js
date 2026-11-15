// The first screen is drawn on the 1218x758 Figma frame (see docs/layout-spec.md).
// On desktop the whole frame is scaled uniformly to fit the viewport.
const root = document.documentElement;
const FRAME_W = 1218;
const FRAME_H = 758;

function fit() {
  if (window.innerWidth <= 960) {
    root.style.removeProperty("--scale");
    return;
  }
  const scale = Math.min(window.innerWidth / FRAME_W, window.innerHeight / FRAME_H);
  root.style.setProperty("--scale", scale.toFixed(4));
}

fit();
window.addEventListener("resize", fit);

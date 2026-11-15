// Scale the landing content so the whole first screen fits a laptop viewport.
const home = document.querySelector(".home");
const header = document.querySelector(".header");
const footer = document.querySelector(".footer");
const DESIGN_HEIGHT = 560; // tabs + cover at scale 1

function fit() {
  if (window.innerWidth <= 960) {
    home.style.removeProperty("--scale");
    return;
  }
  const free = window.innerHeight - header.offsetHeight - footer.offsetHeight - 24;
  const scale = Math.min(1.25, Math.max(0.6, free / DESIGN_HEIGHT));
  home.style.setProperty("--scale", scale.toFixed(3));
}

fit();
window.addEventListener("resize", fit);

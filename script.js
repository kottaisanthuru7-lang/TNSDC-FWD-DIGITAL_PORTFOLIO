let angle = 132;

const animate = function() {
  angle = angle >= 360 ? 0 : angle + 1;
  document.documentElement.style.setProperty('--angle', `${angle}deg`);
  requestAnimationFrame(animate);
}

animate();
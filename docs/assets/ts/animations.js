// animations.js
export function initAnimations() {
  try {
    const elements = document.querySelectorAll('main, h2, p, a');
    elements.forEach((el, i) => {
      el.animate(
        [
          { opacity: 0, transform: 'translateY(8px)' },
          { opacity: 1, transform: 'translateY(0)' }
        ],
        { duration: 450 + (i * 25), fill: 'forwards', easing: 'ease-out' }
      );
    });
  } catch (e) {
    // falhar silenciosamente em navegadores muito antigos
    // console.warn('Animations init failed', e);
  }
}

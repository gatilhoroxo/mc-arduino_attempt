import { enableThemeToggleButton } from './theme.js';
import { initAnimations } from './animations.js';

document.addEventListener('DOMContentLoaded', () => {
  enableThemeToggleButton('theme-toggle');
  initAnimations();
  // accessibility: make the theme button reachable by keyboard
  const t = document.getElementById('theme-toggle');
  if (t) t.setAttribute('aria-label', 'Alternar tema claro/escuro');
  console.log('🎯 Projetos Arduino carregado!');
});

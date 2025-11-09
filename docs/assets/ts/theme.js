// theme.js
export function setThemeImmediate(theme) {
  // substitui a folha de estilo principal pelo tema escolhido
  const link = document.querySelector('link[rel="stylesheet"]');
  if (!link) return;
  if (theme === 'light') {
    link.href = link.href.includes('assets/css/') ? link.href.replace(/(dark-theme|style|light-theme)\.css/, 'light-theme.css') : 'assets/css/light-theme.css';
    // botão será atualizado pelo main.js
  } else {
    link.href = link.href.includes('assets/css/') ? link.href.replace(/(light-theme|style|dark-theme)\.css/, 'dark-theme.css') : 'assets/css/dark-theme.css';
  }
}

export function enableThemeToggleButton(btnId = 'theme-toggle') {
  const btn = document.getElementById(btnId);
  if (!btn) return;

  const saved = localStorage.getItem('theme') || 'dark';
  setThemeImmediate(saved);
  btn.textContent = saved === 'dark' ? '☀️' : '🌙';
  document.body.dataset.theme = saved;

  btn.addEventListener('click', () => {
    const current = document.body.dataset.theme === 'dark' ? 'dark' : (localStorage.getItem('theme') || 'dark');
    const next = current === 'dark' ? 'light' : 'dark';
    setThemeImmediate(next);
    document.body.dataset.theme = next;
    localStorage.setItem('theme', next);
    btn.textContent = next === 'dark' ? '☀️' : '🌙';
  });
}

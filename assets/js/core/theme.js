// Light / Dark theme toggle
(function() {
  const defaultTheme = '{{ site.Params.theme.default | default `system`}}'
  const themes = ["light", "dark"];

  btn = document.getElementById('custom-theme-toggle');

  function applyTheme(theme) {
    theme = themes.includes(theme) ? theme : "system";
    btn.parentElement.dataset.theme = theme;
    localStorage.setItem("color-theme", theme);
  }

  function switchTheme(theme) {
  // 1. Kill all transitions globally
  const disableTransition = document.createElement('style');
  disableTransition.innerHTML = '*, *::before, *::after { transition: none !important; }';
  document.head.appendChild(disableTransition);

  setTheme(theme);
  applyTheme(theme);
 // 3. Force reflow & Cleanup
  window.getComputedStyle(disableTransition).opacity;
  requestAnimationFrame(() => {
  document.head.removeChild(disableTransition);
});
  }

  const colorTheme = "color-theme" in localStorage ? localStorage.getItem("color-theme") : defaultTheme;
  switchTheme(colorTheme);

  btn.addEventListener("click", () => {
    const current = localStorage.getItem("color-theme");
    const nextTheme = (current === 'dark') ? 'light' : 'dark';
    switchTheme(nextTheme);
  })

  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
    if (localStorage.getItem("color-theme") === "system") {
      setTheme("system");
    }
  });
})();


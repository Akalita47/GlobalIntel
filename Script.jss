(() => {
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const htmlElement = document.documentElement;

  // Initialize theme from localStorage or default to light
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    htmlElement.setAttribute('data-theme', 'dark');
    themeToggleBtn.textContent = 'Light Mode';
    themeToggleBtn.setAttribute('aria-pressed', 'true');
  } else {
    htmlElement.setAttribute('data-theme', 'light');
    themeToggleBtn.textContent = 'Dark Mode';
    themeToggleBtn.setAttribute('aria-pressed', 'false');
  }

  // Toggle theme and persist choice
  themeToggleBtn.addEventListener('click', () => {
    const isDark = htmlElement.getAttribute('data-theme') === 'dark';
    if (isDark) {
      htmlElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
      themeToggleBtn.textContent = 'Dark Mode';
      themeToggleBtn.setAttribute('aria-pressed', 'false');
    } else {
      htmlElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      themeToggleBtn.textContent = 'Light Mode';
      themeToggleBtn.setAttribute('aria-pressed', 'true');
    }
  });
})();

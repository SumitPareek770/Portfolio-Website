// Dark Mode Toggle Script
const toggleBtn = document.getElementById('toggle-theme');
const body = document.body;

// Set initial theme based on saved preference
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
  toggleBtn.textContent = "☀ Toggle Light Mode";
} else {
  toggleBtn.textContent = "🌙 Toggle Dark Mode";
}

// Toggle theme on button click
toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark');

  if (body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
    toggleBtn.textContent = "☀ Toggle Light Mode";
  } else {
    localStorage.setItem('theme', 'light');
    toggleBtn.textContent = "🌙 Toggle Dark Mode";
  }
});

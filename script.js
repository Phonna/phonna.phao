const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
menuToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();
// Update the email, LinkedIn URL, and CV link in index.html before publishing.
document.getElementById('cvLink').addEventListener('click', event => {
  if (event.currentTarget.getAttribute('href') === '#') {
    event.preventDefault();
    alert('Add your CV PDF and update this link in index.html.');
  }
});

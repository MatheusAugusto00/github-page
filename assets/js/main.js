document.getElementById('year').textContent = new Date().getFullYear();
// Fecha o menu mobile ao selecionar uma seção.
document.querySelectorAll('#navMenu .nav-link').forEach(link => link.addEventListener('click', () => {
  const menu = document.getElementById('navMenu');
  if (menu.classList.contains('show')) bootstrap.Collapse.getOrCreateInstance(menu).hide();
}));

const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const menuLinks = document.querySelectorAll('.menu-link');

btn.addEventListener('click', navToogle);
menuLinks.forEach(link => link.addEventListener('click', navToogle));

function navToogle() {
  btn.classList.toggle('open');
  menu.classList.toggle('flex');
  menu.classList.toggle('hidden');
}
const faTimes = document.getElementById('fa-times');
const faStream = document.getElementById('fa-stream');
const dropdownMenu = document.getElementById('dropdown-menu');

document.getElementById('menu-icon').addEventListener('click', ()=> {
  faStream.classList.toggle('hidden');
  faTimes.classList.toggle('hidden');
  dropdownMenu.classList.toggle('hidden')
});




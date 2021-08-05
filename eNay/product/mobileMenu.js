const header = document.querySelector('.header');
const mobileMenu = document.getElementById('mobileMenu');
const openMenu = document.querySelector('.fa-bars');
const menuMobile = document.querySelector('.menuMobile');
const closeMenu = document.querySelector('.fa-times');

mobileMenu.addEventListener('click', (e) => {
    if(openMenu.classList.contains('show')){
      openMenu.classList.remove('show'),
      closeMenu.classList.add('show');
      menuMobile.style.display = 'flex';
      header.style.height = '50vh';
    } else{
      openMenu.classList.add('show'),
      closeMenu.classList.remove('show');
      menuMobile.style.display = 'none';
      header.style.height = '120px';
    }
})
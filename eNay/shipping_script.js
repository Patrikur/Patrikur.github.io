const header = document.querySelector('.header');
const mobileMenu = document.getElementById('mobileMenu');
const openMenu = document.querySelector('.fa-bars');
const menuMobile = document.querySelector('.menuMobile');
const closeMenu = document.querySelector('.fa-times');
const searchbar = document.querySelectorAll('.searchbar');
const searchBtn = document.querySelectorAll('.fa-search');
const loader = document.getElementById('loader');
const items = document.getElementById('items');
const countries = document.getElementById('countries');

import { messages } from './messages.js';

//mobile menu
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

//searchbar and button search functions
searchbar.forEach(bar => {
  bar.addEventListener('keyup', (e)=>{
    if(e.key === 'Enter'){
        bar.setAttribute('placeholder', messages[Math.floor(Math.random()*(messages.length-1))]);
        bar.value = '';
    }           
  })
})

searchBtn.forEach(btn => {
  btn.addEventListener('click', (e)=>{
    searchbar.forEach(bar => {
      bar.setAttribute('placeholder', messages[Math.floor(Math.random()*(messages.length-1))]);
      bar.value = '';  
    })
  })      
})

//shopping cart check and update
let shoppingCart = [];

function checkCart(){
  let keys = Object.keys(sessionStorage);
  for(let i = 0; i <= keys.length; i ++){
    if(isNaN(keys[i]) === false){
      let article = sessionStorage.getItem(keys[i]);
      shoppingCart.push(article);
      console.log(article);
    }
  }
  if(shoppingCart.length > 0){
    items.style.display = 'flex';
    items.innerHTML = `${shoppingCart.length}`;
  }
}

checkCart();

//fetching shopping item data from API
const getCountries = async () => {
    const url = `https://restcountries.eu/rest/v2/all`;
    const res = await fetch(url);
    const data = await res.json();
    const arrayLength = data.length;

    if(data.length != 0){
      loader.style.display = "none";
    }
    
    for(let i = 0; i <= arrayLength; i++){
      countries.innerHTML += `<p>${data[i].name}</p>`;  
    }
    
}

getCountries();



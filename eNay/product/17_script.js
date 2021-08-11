const title = document.getElementById('title');
const header = document.querySelector('.header');
const mobileMenu = document.getElementById('mobileMenu');
const openMenu = document.querySelector('.fa-bars');
const menuMobile = document.querySelector('.menuMobile');
const closeMenu = document.querySelector('.fa-times');
const searchbar = document.querySelectorAll('.searchbar');
const searchBtn = document.querySelectorAll('.fa-search');
const main  = document.getElementById('main');
const catMen = document.querySelectorAll('.catMen');
const catWomen = document.querySelectorAll('.catWomen');
const catJewelry = document.querySelectorAll('.catJewelry');
const catElectronics = document.querySelectorAll('.catElectronics');
const catSale = document.querySelectorAll('.catSale');
const loader = document.getElementById('loader');
const items = document.getElementById('items');

import { messages, popUps } from '../messages.js';

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

let idx = 16;

let shoppingCart = [];

function checkCart(){
  let keys = Object.keys(sessionStorage);
  for(let i = 0; i <= keys.length; i ++){
    if(typeof keys[i] === "string" && keys[i] !=="IsThisFirstTime_Log_From_LiveServer"){
      let addArticle = true;
      shoppingCart.forEach((article) =>{
        if(article === keys[i]){
            addArticle = false;
          }    
      })
      if(addArticle){
        shoppingCart.push(keys[i]);
      }
    }
  }      
  if(shoppingCart.length > 0){
    items.style.display = 'flex';
    items.innerHTML = `${shoppingCart.length}`;
  }
}

checkCart();

const getProduct = async (idx) => {
    const url = `https://fakestoreapi.com/products`;
    const res = await fetch(url);
    const data = await res.json();
    const arrayLength = data.length;

    if(data.length != 0){
      loader.style.display = "none";
    }  
    
    title.innerHTML = `
    eNay | ${data[idx].title}
    `

    main.innerHTML = `
    <div class="image-container" id="image">
          <img
            src=${data[idx].image}
            alt="Product"
          />
        </div>
        <div class="description">
          <h2 id="title" class="title">
          ${data[idx].title}
          </h2>
          <h3 class="price" id="price">
          ${(data[idx].price)*100}$ <a href="/eNay/shipping.html">+ shipping</a>
          </h3>

          <hr class="line-breaks" />
          <article class="text" id="text">
          ${data[idx].description}.
          </article>
          <hr class="line-breaks" />
          <div class="call-to-action">
            <label for="quantity" class="quantity">Quantity:</label>
            <select name="quantity" id="quantity">
              <option value="1">1</option>
              <option value="1">1</option>
              <option value="1">1</option>
              <option value="1">1</option>
              <option value="1">1</option>
              <option value="1">1</option>
              <option value="1">1</option>
              <option value="1">1</option>
              <option value="1">1</option>
              <option value="1">1</option>
              <option value="1">1</option>
              <option value="1">1</option>
              <option value="1">1</option>
              <option value="1">1</option>
              <option value="1">1</option>
            </select>
            <button id="addToCart" class="add">Add to cart</button>
          </div>
        </div>
    `
    if(data[idx].category === "men's clothing"){
        catMen.forEach(cat => {
          cat.classList.add('active');
        })
    } else if(data[idx].category === "women's clothing"){
        catWomen.forEach(cat => {
          cat.classList.add('active');
        })
    } else if(data[idx].category === "jewelery"){
        catJewelry.forEach(cat => {
          cat.classList.add('active');
        })
    } else if(data[idx].category === "electronics"){
        catElectronics.forEach(cat => {
          cat.classList.add('active');
        })
    } else{
        catSale.forEach(cat => {
          cat.classList.add('active');
        })
    }

    const image = document.getElementById('image');
    image.addEventListener('click', () =>{
        alert(popUps[Math.floor(Math.random()*popUps.length)]);
    })

    const addToCart = document.getElementById('addToCart');
    addToCart.addEventListener('click', () =>{
        let addArticle = true;
        shoppingCart.forEach((article) =>{
          if(article === idx.toString()){
            addArticle = false;
          }
        })
        if(addArticle){
          sessionStorage.setItem(idx,JSON.stringify(idx));
          checkCart();
        } else{
          alert('Article already in cart, nice try!')  
        }
    })
}

getProduct(idx);



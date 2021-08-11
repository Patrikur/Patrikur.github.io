const title = document.getElementById('title');
const header = document.querySelector('.header');
const mobileMenu = document.getElementById('mobileMenu');
const openMenu = document.querySelector('.fa-bars');
const menuMobile = document.querySelector('.menuMobile');
const closeMenu = document.querySelector('.fa-times');
const searchbar = document.querySelectorAll('.searchbar');
const searchBtn = document.querySelectorAll('.fa-search');
const loader = document.getElementById('loader');
const products  = document.getElementById('products');
const items = document.getElementById('items');

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

//fetching shopping item data from API
const getCart = async () => {
    const url = `https://fakestoreapi.com/products`;
    const res = await fetch(url);
    const data = await res.json();
    const arrayLength = data.length;
    
    if(data.length != 0){
      loader.style.display = "none";
    }

    let totalAmount = 0;

    if(shoppingCart.length === 0){
      products.innerHTML = `
      <div class="placeholder">
        <p>Cart is empty.<br>But you can pay for shipping if you want to.</p>
      </div>
      `
    } else {
      shoppingCart.forEach((item) => {
          let idx = parseInt(item);
          totalAmount += (data[idx].price)*100;
          products.innerHTML += `
            <div class="product">
                  <div class="left">
                      <a href='/eNay/product/${data[idx].id}.html'><img src="${data[idx].image}"/></a>
                      <strong>${data[idx].title}</strong>
                  </div>    
                  <div class="right">
                      <span>Quantity: 1</span>
                      <button class="removeItem"><i class="fas fa-minus-circle"></i></button>
                      <span>$${(data[idx].price)*100}</span>
                  </div>    
            </div>`
      }) 
    }

    

    products.innerHTML +=`
        <hr class="line-breaks" />
        <div class="totalprice">
            <div class="subtotal">
            <span>Subtotal:</span>
            <span>$${totalAmount}</span>
            </div>
            <div class="shipping">
            <span>Shipping:</span>
            <span>$200</span>
            </div>
            <div class="total">
            <span>Total:</span>
            <span>$${totalAmount + 200}</span>
            </div>
        </div>
        
    `

    const removeItems = document.querySelectorAll('.removeItem');
    removeItems.forEach(item => {
      item.addEventListener('click', () =>{
        alert("Pandora's box has been opened...");
      })
    })


}

getCart();



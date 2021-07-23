const header = document.querySelector('.header');
const mobileMenu = document.getElementById('mobileMenu');
const openMenu = document.querySelector('.fa-bars');
const menuMobile = document.querySelector('.menuMobile');
const closeMenu = document.querySelector('.fa-times');
const searchbar = document.querySelectorAll('.searchbar');
const searchBtn = document.querySelectorAll('.fa-search');
const products = document.getElementById('products');
const messages = ['You are not an easy customer...', 'Just stop it!', 'Seriously?', 'Please, stop!', 'Get some help!', 'Initiate self-destruction...', 'Watch out behind you!', 'Search function disabled'];

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

const getProduct = async () => {
    const url = `https://fakestoreapi.com/products/category/electronics`;
    const res = await fetch(url);
    const data = await res.json();
    const arrayLength = data.length;

    for(let idx = 0; idx<=data.length; idx++){
     products.innerHTML += `
        <a href='/product/${data[idx].id}.html'>
        <div class="product">
            <img src="${data[idx].image}"/>
            <strong>${data[idx].title}</strong>
            <span>${(data[idx].price)*100}$</span>
        </div></a>`   
    }
}

getProduct();

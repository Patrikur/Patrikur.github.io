const header = document.querySelector('.header');
const mobileMenu = document.getElementById('mobileMenu');
const openMenu = document.querySelector('.fa-bars');
const menuMobile = document.querySelector('.menuMobile');
const closeMenu = document.querySelector('.fa-times');
const searchbar = document.querySelectorAll('.searchbar');
const searchBtn = document.querySelectorAll('.fa-search');
const items = document.getElementById('items');
const card = document.querySelector('.card');
const online = document.querySelector('.online');
const bitcoin = document.querySelector('.bitcoin');
const blood = document.querySelector('.blood');
const organ = document.querySelector('.organ');
const closeBtn = document.querySelector('.fa-times-circle');
const overlay = document.getElementById('overlay');
const overlay1 = document.getElementById('overlay1');
const overlay2 = document.getElementById('overlay2');
const overlay3 = document.getElementById('overlay3');

const messages = ['You are not an easy customer...', 'Just stop it!', 'Seriously?', 'Please, stop!', 'Get some help!', 'Initiate self-destruction...', 'Watch out behind you!', 'Search function disabled'];

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

//showing payment method
function showCard(){
  card.style.display = 'flex';
  online.style.display = 'none';
  bitcoin.style.display = 'none';
  blood.style.display = 'none';
  organ.style.display = 'none';
}

function showOnline(){
  card.style.display = 'none';
  online.style.display = 'flex';
  bitcoin.style.display = 'none';
  blood.style.display = 'none';
  organ.style.display = 'none';
}

function showBitcoin(){
  card.style.display = 'none';
  online.style.display = 'none';
  bitcoin.style.display = 'flex';
  blood.style.display = 'none';
  organ.style.display = 'none';
}

function showBlood(){
  card.style.display = 'none';
  online.style.display = 'none';
  bitcoin.style.display = 'none';
  blood.style.display = 'flex';
  organ.style.display = 'none';
}

function showOrgan(){
  card.style.display = 'none';
  online.style.display = 'none';
  bitcoin.style.display = 'none';
  blood.style.display = 'none';
  organ.style.display = 'flex';
}

//overlay messages
closeBtn.addEventListener('click', closeOverlay);

function openOverlay(){
  overlay.style.display = 'flex';
  overlay1.style.display = 'inline-block';
}

function openMessage2(){
  overlay1.style.display = 'none';
  overlay2.style.display = 'inline-block';
}

function openMessage3(){
  overlay2.style.display = 'none';
  overlay3.style.display = 'inline-block';
}

function closeOverlay(){
  overlay.style.display = 'none';
}
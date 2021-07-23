const header = document.querySelector('.header');
const mobileMenu = document.getElementById('mobileMenu');
const openMenu = document.querySelector('.fa-bars');
const menuMobile = document.querySelector('.menuMobile');
const closeMenu = document.querySelector('.fa-times');
const searchbar = document.querySelectorAll('.searchbar');
const searchBtn = document.querySelectorAll('.fa-search');
const items = document.getElementById('items');
const imgs = document.getElementById('carousel-images');
const leftBtn = document.querySelector('.fa-angle-left');
const rightBtn = document.querySelector('.fa-angle-right');
const testimonial = document.querySelector('.testimonial');
const userImage = document.querySelector('.user-image');
const userName = document.querySelector('.user-name');
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

let idx_array = [0,1,2,3];
const dataLength = 20;
    
leftBtn.addEventListener('click', () =>{
    for(let idx = 0; idx < idx_array.length; idx++) {
        if(idx_array[idx] === 0){
            idx_array[idx] = dataLength-1;
        } else{
            idx_array[idx] -= 1;
        }
    }
    getProduct(idx_array);
})

rightBtn.addEventListener('click', () =>{
    for(let idx = 0; idx < idx_array.length; idx++) {
        if(idx_array[idx] === (dataLength - 1)){
            idx_array[idx] = 0;
        } else{
            idx_array[idx] += 1;
        }
    }
    getProduct(idx_array);
})    

const getProduct = async (idx_array) => {
    const url = `https://fakestoreapi.com/products`;
    const res = await fetch(url);
    const data = await res.json();
    const arrayLength = data.length;
    

    if(window.outerWidth < 768){
        imgs.innerHTML = `
        <a href='/eNay/product/${data[idx_array[0]].id}.html'><div class="product">
            <img src="${data[idx_array[0]].image}"/>
            <strong>${data[idx_array[0]].title}</strong>
            <span>${(data[idx_array[0]].price)*100}$</span>
        </div></a>`  
    } else if (window.outerWidth > 768 && window.outerWidth < 1200) {
        imgs.innerHTML = `
        <a href='/eNay/product/${data[idx_array[0]].id}.html'><div class="product">
            <img src="${data[idx_array[0]].image}"/>
            <strong>${data([idx_array[0]].price)*100}$</span>
        </div></a>
        <a href='/eNay/product/${data[idx_array[1]].id}.html'><div class="product">
            <img src="${data[idx_array[1]].image}"/>
            <strong>${data[idx_array[1]].title}</strong>
            <span>${(data[idx_array[1]].price)*100}$</span>
        </div></a>`
    } else {
        imgs.innerHTML = `
        <a href='/eNay/product/${data[idx_array[0]].id}.html'><div class="product">
            <img src="${data[idx_array[0]].image}"/>
            <strong>${data[idx_array[0]].title}</strong>
            <span>${(data[idx_array[0]].price)*100}$</span>
        </div></a>
        <a href='/eNay/product/${data[idx_array[1]].id}.html'><div class="product">
            <img src="${data[idx_array[1]].image}"/>
            <strong>${data[idx_array[1]].title}</strong>
            <span>${(data[idx_array[1]].price)*100}$</span>
        </div></a>
        <a href='/eNay/product/${data[idx_array[2]].id}.html'><div class="product">
            <img src="${data[idx_array[2]].image}"/>
            <strong>${data[idx_array[2]].title}</strong>
            <span>${(data[idx_array[2]].price)*100}$</span>
        </div></a>
        <a href='/eNay/product/${data[idx_array[3]].id}.html'><div class="product">
            <img src="${data[idx_array[3]].image}"/>
            <strong>${data[idx_array[3]].title}</strong>
            <span>${(data[idx_array[3]].price)*100}$</span>
        </div></a>
        `
    }
    
}

getProduct(idx_array);

const getUser = async() =>{
    const url = `https://randomuser.me/api/?inc=name,picture`;
    const res = await fetch(url);
    const data = await res.json();
    
    const testimonials = ['It has never been such a hassle to order in my whole life. But they were the only ones who had the HDD I needed. The price was ridiculous. I hope I never have to order at their site again.', 'My son wanted that one shirt for his birthday and they were the only ones who had it. I took a loan for that. Will never do it again!', 'I never imagined proposing to my partner would be that traumatizing. This place was the only one left which had the rings I wanted. They arrived way too late and now I am single again. Thanks, guys!','The last shop of the web who had the jacket I needed for my polar expedition. Took me hours to find out how to order, I almost missed my flight. I will not order again even if it was the last shop of the web!'];

    testimonial.innerHTML = `${testimonials[Math.floor(Math.random()*(testimonials.length-1))]}`;
    userImage.setAttribute('src', `${data.results[0].picture.medium}`);
    userName.innerHTML = `${data.results[0].name.first} ${data.results[0].name.last}`;
}

getUser();


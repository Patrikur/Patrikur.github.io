const title = document.getElementById('title');
const main  = document.getElementById('main');
const loader = document.getElementById('loader');
const catMen = document.querySelectorAll('.catMen');
const catWomen = document.querySelectorAll('.catWomen');
const catJewelry = document.querySelectorAll('.catJewelry');
const catElectronics = document.querySelectorAll('.catElectronics');
const catSale = document.querySelectorAll('.catSale');
const popUps = ['Local restrictions do not allow that many pixels in such a small place.', 'Are you sure you want to see that many details?','Error code 3:16. Stone Cold stunned the viewport.', 'Puh...I am out of creative answers. Do you have one?','Welcome to Jurassic Park!'];

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

export { getProduct }
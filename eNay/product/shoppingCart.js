const items = document.getElementById('items');

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
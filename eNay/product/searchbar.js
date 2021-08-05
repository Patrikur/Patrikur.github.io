const searchbar = document.querySelectorAll('.searchbar');
const searchBtn = document.querySelectorAll('.fa-search');
const messages = ['You are not an easy customer...', 'Just stop it!', 'Seriously?', 'Please, stop!', 'Get some help!', 'Initiate self-destruction...', 'Watch out behind you!', 'Search function disabled'];

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
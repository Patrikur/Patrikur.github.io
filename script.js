const header = document.getElementById('header');
const nav = document.getElementById('nav');
const scrollElements = document.querySelectorAll('.scroll');
const skillElements = document.querySelectorAll('.skillbar');

//navigation bar functions:
function menuScroll(){
    if(window.scrollY > header.offsetHeight+ 400){
        header.style.height = '50px';
        header.style.opacity ='1';
        nav.style.height = '50px';
        nav.style.opacity = '1';
    } else {
        header.style.height = '0';
        header.style.opacity ='0';
        nav.style.height = '0';
        nav.style.opacity = '0';
    }
}

window.addEventListener('scroll', menuScroll);

//scroll function:
scrollElements.forEach((el) => {
    el.style.opacity = 0;
})

const elementInView = (el, percentageScroll = 100) => {
    const elementTop = el.getBoundingClientRect().top;
    return (elementTop <= (window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/100));
}

const displayScrollElement = (element) => {
    element.classList.add('active');
}

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if(elementInView(el, 100)){
            displayScrollElement(el);
        }
    })
}

const growScrollAnimation = () =>{
    skillElements.forEach((skill) => {
      if(elementInView(skill, 100)){
        skill.classList.add('grow');
    }  
    })
    
}

window.addEventListener('scroll', () => {
    handleScrollAnimation();
    growScrollAnimation();
})
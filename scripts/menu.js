        
let menuToggle = document.querySelector('.toggle');
let menu = document.querySelector('.menu');
let bodyElement = document.querySelector('body');

let isMenuActive = () => {
    if (window.innerWidth <= 1030) {
        if (menu.classList.contains('active')) {
            bodyElement.style.overflow = 'hidden';
        }
        else {
            bodyElement.style.overflow = 'scroll';
        }
    }
}
        
window.addEventListener('scroll', () => {
    let header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 0);
    }
);

let toggleMenu = () => {
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
    isMenuActive();
}
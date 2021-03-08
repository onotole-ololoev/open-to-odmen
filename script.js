const menuBtn = document.querySelector('.hamburger__btn'),
    menuMobile = document.querySelector('.main__menu'),
    menuHomeBtn = document.querySelector('.navigation__list::before');

let showMenu = function() {
    menuBtn.addEventListener('click', (e) => {
        console.log(e.target);
        if (menuMobile.style.display === 'block') {
            menuMobile.style.display = 'none';
        } else {
            menuMobile.style.display = 'block';
        }
    });  
};
showMenu();

let hideMenu = function() {
    menuHomeBtn.addEventListener('click', () => {
        menuMobile.style.display = 'none';
    });
};
hideMenu();
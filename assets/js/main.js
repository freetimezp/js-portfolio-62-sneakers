//show menu
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

//remove meno on click link
const navLinks = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}

navLinks.forEach(n => n.addEventListener('click', linkAction));


//swiper
let swiperImages = new Swiper(".home__swiper", {
    loop: true,
    spaceBetween: 64,
    grabCursor: true,
    centeredSlides: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction'
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

let swiperTitles = new Swiper(".home__titles", {
    loop: true,
    spaceBetween: 64,
    grabCursor: true,
    centeredSlides: true,
});

swiperImages.controller.control = swiperTitles;
swiperTitles.controller.control = swiperImages;


//change bg header
const bgHeader = () => {
    const header = document.getElementById('header');
    this.scrollY >= 50 ? header.classList.add('bg-header') : header.classList.remove('bg-header');
}

window.addEventListener('scroll', bgHeader);
















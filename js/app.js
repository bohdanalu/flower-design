const burger = document.querySelector('.burger');
const lines = document.querySelectorAll('.burger__lines');
const catalogSwiper = document.querySelector('.catalog__swiper');
const reviewSwiper = document.querySelector('.review__swiper');
const headerMenu = document.querySelector('.header__nav');
const header = document.querySelector('.header');
const body = document.querySelector('body');
const searchBtn = document.querySelector('.header__icon--lupa');
const searchForm = document.querySelector('.header__form')

burger.addEventListener('click', burgerClick);
headerMenu.addEventListener('click', clickMenu);
searchBtn.addEventListener('click', clickLupa)

function burgerClick() {
    for (const line of lines) {
        line.classList.toggle('active');
    }
    headerMenu.classList.toggle('active');
    body.classList.toggle('lock');
}

function clickMenu(event) {
    if (event.target.classList.contains('header__menu-link'))
        body.classList.remove('lock');
    headerMenu.classList.remove('active');
    for (const line of lines) {
        line.classList.remove('active');
    }
}

function clickLupa() {
    searchForm.classList.toggle('active');
}


const swiperCatalog = new Swiper(catalogSwiper, {

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    speed: 400,
    spaceBetween: 500,

});


const swiperReview = new Swiper(reviewSwiper, {

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    speed: 400,

});
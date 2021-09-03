
let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let loginBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let closeBtn = document.querySelector('#icon-close');
let menuBar = document.querySelector('#menu-bar');
let navBar = document.querySelector('.navbar');
let videoBtnList =document.querySelectorAll('.video-btn');

window.onscroll = () => {
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menuBar.classList.remove('fa-times');
    navBar.classList.remove('active');
    loginForm.classList.remove('active');
}

menuBar.addEventListener('click', () => {
    menuBar.classList.toggle('fa-times');
    navBar.classList.toggle('active');
})

searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
})

loginBtn.addEventListener('click', () => {
    loginForm.classList.add('active');
})

closeBtn.addEventListener('click', () => {
    loginForm.classList.remove('active');
})

videoBtnList.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');

        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    })
})

// Use lib SwiperJS
var swiper = new Swiper(".mySwiper.review-slider", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    }
});
var swiper = new Swiper(".mySwiper.brand-slider", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        450: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView:3,
        },
        991: {
          slidesPerView: 4,
        },
        1200: {
            slidesPerView: 5,
        },
    }
});
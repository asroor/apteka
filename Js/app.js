let mediaBars = document.querySelector('.bars');

mediaBars.addEventListener('click', () => {
    mediaBars.classList.toggle('bars-active')
})

if (Swiper) {
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        hashNavigation: {
            watchState: true,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}

if (Swiper) {
    var swiper = new Swiper(".mySwiper3", {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".mySwiper2", {
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
    });
}
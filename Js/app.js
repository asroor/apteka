let mediaBars = document.querySelector('.bars');
let bars = document.querySelector('.bars');
let close = document.querySelector('.close-x');
let SitePanel = document.querySelector('.SitePanel');
let sidebar = document.querySelector('.body-sidebar');
let katalog = document.querySelector('.katalog');

katalog.addEventListener('click', () => {
    sidebar.classList.toggle('body-sidebar-active')
})

bars.addEventListener('click', () => {
    SitePanel.classList.add('SitePanel-active')
})
close.addEventListener('click', () => {
    SitePanel.classList.remove('SitePanel-active')
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
    var swiper = new Swiper(".mySwiper-product", {
        spaceBetween: 30,
        effect: "fade",
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}
const header = document.querySelectorAll(".header");
const header2 = document.querySelector(".about-header");

window.addEventListener("scroll", function() {
    header2.classList.toggle("sticky", window.scrollY > 0);
});

header.forEach(function (head) {
    window.addEventListener("scroll", function() {
        head.classList.toggle("sticky", window.scrollY > 0);
    });
});

const swiper = new Swiper('.swiper', {
    effect: "fade",

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});




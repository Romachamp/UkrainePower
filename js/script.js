const header = document.querySelectorAll(".header");
const header2 = document.querySelector(".about-header");
const links = document.querySelectorAll(".stylized-button");
const tabs = document.querySelectorAll(".event-tab");

window.addEventListener("scroll", function() {
    header2.classList.toggle("sticky", window.scrollY > 0);
});

header.forEach(function (head) {
    window.addEventListener("scroll", function() {
        head.classList.toggle("sticky", window.scrollY > 0);
    });
});

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function (e) {
        for (let j = 0; j < tabs.length; j++) {
            if (tabs[j].classList.contains("visible")) {
                tabs[j].classList.remove("visible");
            }
        }
        tabs[i].classList.add("visible");
    })
}

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




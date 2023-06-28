const swiper = new Swiper(".swiper-carousel", {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 10,
    keyboard: {
        enabled: true,
    },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const slides = document.getElementsByClassName("swiper-slide");
for (const slide of slides) {
    slide.addEventListener("click", () => {
        const { className } = slide;
        if (className.includes("swiper-slide-next")) {
            swiper.slideNext();
        } else if (className.includes("swiper-slide-prev")) {
            swiper.slidePrev();
        }
    });
}

function resizeTextToFit() {
    const descrEls = document.getElementsByClassName('description');
    for (const el of descrEls) {
        el.style.width = el.offsetWidth;
        el.style.height = el.offsetHeight;
    }
    textFit(descrEls, {
        maxFontSize: 14
    });
}
resizeTextToFit();
addEventListener("resize", (event)=> {
    resizeTextToFit();
});
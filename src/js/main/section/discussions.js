const Slider1 = new Swiper('.slider-1', {
    slidesPerView: 1.25,
    spaceBetween: 20,
    watchOverflow: true,
    watchSlidesProgress: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    preloadImages: false,
    lazy: {
        loadOnTransitionStart: true,
        loadPrevNext: true
    },
    breakpoints: {
        640: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
        1260: {
            slidesPerView: 3,
            spaceBetween: 40
        },
        1440: {
            slidesPerView: 3,
            spaceBetween: 40,
            navigation: {
                nextEl: '.swiper-next',
                prevEl: '.swiper-prev',
            }
        }
    }
});
const Slider2 = new Swiper('.slider-2', {
    slidesPerView: 2.25,
    spaceBetween: 20,
    watchOverflow: true,
    watchSlidesProgress: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    preloadImages: false,
    lazy: {
        loadOnTransitionStart: true,
        loadPrevNext: true
    },
    breakpoints: {
        640: {
            slidesPerView: 3
        },
        1024: {
            slidesPerView: 4
        },
        1260: {
            slidesPerView: 6,
            spaceBetween: 40
        },
        1440: {
            slidesPerView: 6,
            spaceBetween: 40,
            navigation: {
                nextEl: '.swiper-next',
                prevEl: '.swiper-prev',
            }
        }
    }
});
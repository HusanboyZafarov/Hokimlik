const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    grabCursor: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    speed: 1000,
    spaceBetween: 20,
    autoplay: {
        delay: 2000,
    },
});

const swiper_sec = new Swiper('.swiper_second', {
    direction: 'horizontal',
    loop: true,
    grabCursor: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    speed: 1000,
    spaceBetween: 20,
    autoplay: {
        delay: 2000,
    },
});
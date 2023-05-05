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

let swiper_slider = document.querySelector(".swiper")
let swiper_second = document.querySelector(".swiper_second")
let hero_head_wrapper = document.querySelectorAll(".swiper .main-hero_head_wrapper")
let hero_head_wrapper_news = document.querySelectorAll(".swiper_second .main-hero_head_wrapper")


window.addEventListener("load", () => {
    nums = [0, 200, 500]
    hero_head_wrapper.forEach((el) => {
        nums.push(el.getBoundingClientRect().height)
    })
    max = Math.max.apply(null, nums)
    swiper_slider.style.height = `${max}px`
})

window.addEventListener("scroll", () => {
    nums = [0, 200, 500]
    hero_head_wrapper.forEach((el) => {
        nums.push(el.getBoundingClientRect().height)
    })
    max = Math.max.apply(null, nums)
    swiper_slider.style.height = `${max}px`
})


window.addEventListener("resize", () => {
    nums = [0, 200, 500]
    hero_head_wrapper.forEach((el) => {
        nums.push(el.getBoundingClientRect().height)
    })
    max = Math.max.apply(null, nums)
    swiper_slider.style.height = `${max}px`
})


window.addEventListener("load", () => {
    nums = [0, 200, 500]
    hero_head_wrapper_news.forEach((el) => {
        nums.push(el.getBoundingClientRect().height)
    })
    max = Math.max.apply(null, nums)
    swiper_second.style.height = `${max}px`
})

window.addEventListener("scroll", () => {
    nums = [0, 200, 500]
    hero_head_wrapper_news.forEach((el) => {
        nums.push(el.getBoundingClientRect().height)
    })
    max = Math.max.apply(null, nums)
    swiper_second.style.height = `${max}px`
})


window.addEventListener("resize", () => {
    nums = [0, 200, 500]
    hero_head_wrapper_news.forEach((el) => {
        nums.push(el.getBoundingClientRect().height)
    })
    max = Math.max.apply(null, nums)
    swiper_second.style.height = `${max}px`
})
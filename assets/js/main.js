header_navigation_item = document.querySelectorAll(".header_navigation_item")
let closer = document.querySelector(".closer")

header_navigation_item.forEach((element) => {
    element.addEventListener("click", () => {
        inner_el = element.lastElementChild
        closer.classList.add("active")
        inner_el_first = element.firstElementChild
        let header_navigation_links_wrapper = document.querySelectorAll(".header_navigation_links_wrapper")

        if (inner_el.getBoundingClientRect().height) {
            inner_el.style.maxHeight = null
            inner_el.style.maxHeight = `0px`
            let header_navigation_item_span = document.querySelectorAll(".header_navigation_item span")
            header_navigation_item_span.forEach(element => {
                element.classList.remove("active")
            });
            closer.classList.remove("active")
        }
        else {
            header_navigation_links_wrapper.forEach((element) => {
                element.style.maxHeight = 0
            });
            let header_navigation_item_span = document.querySelectorAll(".header_navigation_item span")
            header_navigation_item_span.forEach(element => {
                element.classList.remove("active")
            });
            setTimeout(() => {
                inner_el.style.display = "flex"
                inner_el.style.maxHeight = inner_el.scrollHeight + "px"
                let header_navigation_list = document.querySelector(".header_navigation_list")
                header_navigation_list.style.maxHeight = header_navigation_list.scrollHeight + 400 + "px"
                inner_el_first.classList.add("active")
            }, 500)
        }
    })
});

let header_burger = document.querySelector(".header_burger")

header_burger.addEventListener('click', () => {
    header_burger.classList.toggle("active")
    let header_navigation_list = document.querySelector(".header_navigation_list")

    if (header_navigation_list.getBoundingClientRect().height) {
        header_navigation_list.style.maxHeight = null
        header_navigation_list.style.maxHeight = `0px`
    }
    else {
        header_navigation_list.style.display = "flex"
        header_navigation_list.style.maxHeight = header_navigation_list.scrollHeight + "px"
    }

    header_navigation_item.forEach((element) => {
        inner_el = element.lastElementChild
        let header_navigation_item_span = document.querySelectorAll(".header_navigation_item span")
        header_navigation_item_span.forEach(element => {
            element.classList.remove("active")
        });
        let header_navigation_links_wrapper = document.querySelectorAll(".header_navigation_links_wrapper")
        inner_el.style.maxHeight = null
        inner_el.style.maxHeight = `0px`
    });
    closer.classList.remove("active")
})


closer.addEventListener("click", () => {
    header_navigation_item.forEach((element) => {
        inner_el = element.lastElementChild
        inner_el_first = element.firstElementChild

        let header_navigation_links_wrapper = document.querySelectorAll(".header_navigation_links_wrapper")

        inner_el.style.maxHeight = null
        inner_el.style.maxHeight = `0px`
        let header_navigation_item_span = document.querySelectorAll(".header_navigation_item span")
        header_navigation_item_span.forEach(element => {
            element.classList.remove("active")
        });
    });
    closer.classList.remove("active")
})

let swiper_slider = document.querySelector(".swiper")
let hero_head_wrapper = document.querySelectorAll(".main-hero_head_wrapper")


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



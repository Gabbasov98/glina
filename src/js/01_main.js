function mainSlider() {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 2,
        spaceBetween: 28,
        breakpoints: {
            320: {
                slidesPerView: "auto",
            },
            576: {
                slidesPerView: 2,
            },
        }
    })
}


mainSlider()


let burger = document.querySelector(".header__burger")
let body = document.querySelector("body")

burger.onclick = function() {
    this.classList.toggle("header__burger--active")
    body.classList.toggle("fixed-body")
}

let header = document.querySelector(".header")


if (header) {
    fixHeader()
    window.onscroll = function() {
        fixHeader()
        if (window.innerWidth < 992) {
            fixMobHeader()
        }
    }
}


function fixHeader() {
    if (window.scrollY > 150) {
        header.classList.add("header--fix")
    } else {
        header.classList.remove("header--fix")
    }

}
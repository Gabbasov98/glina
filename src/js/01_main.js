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

    if (window.innerWidth < 576) {
        swiper.slideTo(1)
    }
}

window.resize = function() {
    mainSlider()
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

let scrollBtn = document.querySelector(".scroll-up")

if (scrollBtn) {
    showScrollBtn()
    window.onscroll = function() {
        showScrollBtn()
    }
    scrollBtn.onclick = function() {
        window.scrollTo(0, 0);
    }
}

function showScrollBtn() {
    if (window.scrollY > 150) {
        scrollBtn.classList.add("scroll-up--active")
    } else {
        scrollBtn.classList.remove("scroll-up--active")
    }
}


function fixHeader() {
    if (window.scrollY > 150) {
        header.classList.add("header--fix")
    } else {
        header.classList.remove("header--fix")
    }

}

let anchorLinks = document.querySelectorAll(".nav__link")
anchorLinks.forEach(el => {
    el.onclick = function() {
        burger.classList.remove("header__burger--active")
        body.classList.remove("fixed-body")
    }
});
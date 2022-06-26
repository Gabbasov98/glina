function mainSlider() {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 2,
        spaceBetween: 28,
        breakpoints: {
            320: {
                slidesPerView: 1,
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
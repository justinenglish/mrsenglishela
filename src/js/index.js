import "../scss/main.scss";
import "../js/carousel.js";
import "../js/fade-in-content.js";
import "vendor/js/fontawesome-all.min.js";

$(window).scroll(function() {
    $(".header .header__content, .header .down-arrow, .carousel").css("opacity", 1 - $(window).scrollTop() / 800);
});
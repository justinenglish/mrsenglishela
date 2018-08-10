import "../scss/main.scss";
import "bootstrap";
import "vendor/js/fontawesome-all.min.js";

$(window).scroll(function() {
    $(".header .header-content, .header .down-arrow").css("opacity", 1 - $(window).scrollTop() / 800);
});
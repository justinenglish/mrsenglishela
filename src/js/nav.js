function scrollTo(target, offset) {
    let $target = $(target);
    let position = $target.offset().top - parseInt($target.next().css("marginTop")) - parseInt($target.next().css("paddingTop"));
    
    $("html, body").animate({
        "scrollTop": position + offset
    }, 1000);
}

$(".header-nav__mobile").on("click", function() {
    // $(this).children("div").toggleClass("open");  
    // $(".header-nav__mobile-list").toggleClass("display-none");
    $(".header-nav__mobile-list").css("width", "250px");
    $(".header-nav__mobile-list--close").css("opacity", "1");
});

$(".header-nav__mobile-list--close").on("click", function() {
    $(".header-nav__mobile-list").css("width", "0px");
    $(this).css("opacity", "0");
});

$(".header-nav li a, .down-arrow").click(function(e) {
    e.preventDefault();
    scrollTo($(this).attr("href"), 0);
});

  	
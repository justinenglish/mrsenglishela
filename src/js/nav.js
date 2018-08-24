function scrollTo(target, offset) {
    let $target = $(target);
    let position = $target.offset().top - parseInt($target.next().css("marginTop")) - parseInt($target.next().css("paddingTop"));
    
    $("html, body").animate({
        "scrollTop": position + offset
    }, 1000);
}

$(".header-nav li a, .down-arrow").click(function(e) {
    e.preventDefault();
    scrollTo($(this).attr("href"), 0);
});

  	
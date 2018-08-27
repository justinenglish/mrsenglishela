$(window).scroll( function(){

    $('.text-block, .three-column-wrapper, .blog-wrapper, .separator-wrapper, .footer-wrapper').each(function() {
        var elementBottom = $(this).position().top + $(this).outerHeight();
        var windowBottom = $(window).scrollTop() + $(window).height();

        if(windowBottom > elementBottom && $(window).width > 568) {         
            $(this).animate({
                'opacity':'1'
            }, 1500);   
        }else {
            $(this).css("opacity", "1");
        } 
    }); 

});
    

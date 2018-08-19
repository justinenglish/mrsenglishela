let carouselIndex = 0;

function carouselSlides() {
    let $slides = $(".carousel__slide");

    for (let i = 0; i < $slides.length; i++) {
        $slides[i].style.display = "none"; 
    }

    carouselIndex++;

    if (carouselIndex > $slides.length) {
        carouselIndex = 1
    
    } 
    $slides[carouselIndex - 1].style.display = "block"; 
    setTimeout(carouselSlides, 6000);
}

carouselSlides();
$(document).ready(function() {
    $('.testimonials-row').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        imfinite: true,
        dots: true,
        appendDots: $('.testimonials-row-right-item-dots')
    });
});
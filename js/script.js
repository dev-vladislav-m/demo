$('.hello__slider .slider').slick({
    dots: false,
    nextArrow: document.querySelector('.hello__slider .next'),
    prevArrow: document.querySelector('.hello__slider .prev')
});

$('.rights__slider .slider').slick({
    dots: false,
    fade: true,
    cssEase: 'linear',
    nextArrow: document.querySelector('.rights__slider .next'),
    prevArrow: document.querySelector('.rights__slider .prev')
});

$('.thanks__slider .slider').slick({
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: document.querySelector('.thanks__slider .next'),
    prevArrow: document.querySelector('.thanks__slider .prev')
});
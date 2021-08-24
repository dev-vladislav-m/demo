
$('.med-homepage-thanks-slider').slick({
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 950,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 650,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ],
    nextArrow: document.querySelector('.med-homepage-thanks-slider-wrapper .slick-next'),
    prevArrow: document.querySelector('.med-homepage-thanks-slider-wrapper .slick-prev')
});


var formedicsPrinciplesSlider = $('.formedics-principles-slider').slick({
    dots: false,
    fade: true,
    cssEase: 'linear',
    adaptiveHeight: true,
    nextArrow: document.querySelector('.formedics-principles-slider-wrapper .slick-next'),
    prevArrow: document.querySelector('.formedics-principles-slider-wrapper .slick-prev')
});

$('.formedics-principles-tabs-item-wr').on('click', function(e) {
    e.preventDefault();
    var index = $(this).data('index');
    formedicsPrinciplesSlider.slick('slickGoTo', index);
})

formedicsPrinciplesSlider.on('afterChange', function (event, slick, direction) {
    $('.formedics-principles-tabs-item').removeClass('active');
    $('.formedics-principles-tabs-item-wr[data-index=\"' + slick.currentSlide + '\"] .formedics-principles-tabs-item').addClass('active');
});


var medHomepageRightsSlider = $('.med-homepage-rights-slider').slick({
    dots: false,
    fade: true,
    cssEase: 'linear',
    adaptiveHeight: true,
    nextArrow: document.querySelector('.med-homepage-rights-slider-wrapper .slick-next'),
    prevArrow: document.querySelector('.med-homepage-rights-slider-wrapper .slick-prev')
});

$('.med-homepage-rights-tabs-item-wr').on('click', function(e) {
    e.preventDefault();
    var index = $(this).data('index');
    medHomepageRightsSlider.slick('slickGoTo', index);
})

medHomepageRightsSlider.on('afterChange', function (event, slick, direction) {
    $('.med-homepage-rights-tabs-item').removeClass('active');
    $('.med-homepage-rights-tabs-item-wr[data-index=\"' + slick.currentSlide + '\"] .med-homepage-rights-tabs-item').addClass('active');
});


function openPopUp(e) {
    var scrollbar = parseInt(window.innerWidth) - parseInt(document.documentElement.clientWidth) + 'px';
    $("body").css({'paddingRight' : scrollbar});
    $("body").toggleClass("lock");
    e.fadeIn();
}

function closePopUp(e) {
    setTimeout(() => $("body").toggleClass("lock"), 400);
    setTimeout(() => $("body").css({'paddingRight' : '0px'}), 400);
    e.fadeOut();
}

$(document).keydown(function(e) {
    if (e.keyCode == 27) {
        closePopUp($(".popup"))
    }
});

$(".formedics-principles-more").click(function() {
    openPopUp($(".formedics-principles-popup"));
});

$(".formedics-principles-popup-close").click(function() {
    closePopUp($(".formedics-principles-popup"));
});


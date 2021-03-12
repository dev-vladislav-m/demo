$(window).scroll(function() {
    $('section .animate__animated').each(function() { 
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+650) {
            $(this).addClass("animate__fadeInUpBig");
        }
    });
});
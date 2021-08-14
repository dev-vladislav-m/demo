$(document).ready(function () {
    var heightItem = $(".product-item .static").height() + 30;
    var heightItemHover = $(".product-item").width() / 2;
    $(".product-item").hover(function() {
        OpenProduct($(this));
    });

    function OpenProduct(product) {
        product.find(".overlay").css('zIndex', '2');
        product.find(".hover").css('zIndex', '1');
        product.animate({height: heightItemHover + 'px'}, {duration: '500'})
        product.find(".gallery").animate({opacity: 0}, {duration: '500'})
        product.find(".hover").delay(500).animate({opacity: 1})
        setTimeout(function (){
            product.find(".overlay").css('zIndex', '-1');
        }, 1500);

    }

    $(".product-item .close").click(function(){
        CloseProduct($(this).parent().parent());
    });

    function CloseProduct(product) {
        product.find(".overlay").css('zIndex', '2');
        product.find(".hover").fadeOut();
        setTimeout(function (){
            product.find(".gallery").animate({opacity: 1}, {duration: '500'})
            product.animate({height: heightItem + 'px'}, {duration: '500'})
        }, 1000);
        setTimeout(function (){
            product.find(".hover").css('zIndex', '-1');
            product.find(".hover").css('opacity', '0');
            product.find(".hover").css('display', 'flex');
            product.find(".overlay").css('zIndex', '-1');
        }, 1500);
    }

    $(".product-item .prev-slide").click(function() {
        PrevSlide($(this).parent().find(".slide"));
    });

    $(".product-item .next-slide").click(function() {
        NextSlide($(this).parent().find(".slide"));
    });

    function PrevSlide(slides) {
        $(slides).each(function (i) {
            if ($(this).hasClass("active")) {
                slides.eq(i).removeClass("active");
                if (i == 0)
                    slides.eq(slides.length - 1).addClass("active");
                else
                    slides.eq(i - 1).addClass("active");

                return false;
            }
        });
    }

    function NextSlide(slides) {
        $(slides).each(function (i) {
            if ($(this).hasClass("active")) {
                slides.eq(i).removeClass("active");
                if (i == slides.length - 1)
                    slides.eq(0).addClass("active");
                else
                    slides.eq(i + 1).addClass("active");
                return false;
            }
        });
    }

});
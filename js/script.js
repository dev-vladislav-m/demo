$(document).ready(function () {

    $(".hp-slider .prev-slide").click(function() {
        PrevSlide($(this).parent().find(".slider__item"));
        PrevSlide($(this).parent().find(".slider__dots span"));
    });

    $(".hp-slider .next-slide").click(function() {
        NextSlide($(this).parent().find(".slider__item"));
        NextSlide($(this).parent().find(".slider__dots span"));
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





/* Уведомления */
$(".link-notification").click(function() {
    AddNotification('<p>На твій номер телефону +380 50*****45 вітправлено <br>SMS код для підтвердження номера телефону</p>', 1);
});
/* ----------- */


/* Pop-Up */
$(".link-fields-1").click(function() {
    openPopUp($(".popup-fields-1"));
});

$(".link-fields-2").click(function() {
    openPopUp($(".popup-fields-2"));
});

$(".link-fields-3").click(function() {
    openPopUp($(".popup-fields-3"));
});

$(".link-fields-4").click(function() {
    openPopUp($(".popup-fields-4"));
});

$(".link-fields-5").click(function() {
    openPopUp($(".popup-fields-5"));
});

$(".link-fields-6").click(function() {
    openPopUp($(".popup-fields-6"));
});

$(".link-fields-7").click(function() {
    openPopUp($(".popup-fields-7"));
});

$(".link-fields-8").click(function() {
    openPopUp($(".popup-fields-8"));
});

$(".link-fields-9").click(function() {
    openPopUp($(".popup-fields-9"));
});

$(".link-fields-10").click(function() {
    openPopUp($(".popup-fields-10"));
});

$(".link-fields-11").click(function() {
    openPopUp($(".popup-fields-11"));
});

$(".link-fields-12").click(function() {
    openPopUp($(".popup-fields-12"));
});

$(".link-fields-13").click(function() {
    openPopUp($(".popup-fields-13"));
});

$(".link-fields-14").click(function() {
    openPopUp($(".popup-fields-14"));
});

$(".link-fields-15").click(function() {
    openPopUp($(".popup-fields-15"));
});

$(".link-fields-16").click(function() {
    openPopUp($(".popup-fields-16"));
});

$(".link-fields-17").click(function() {
    openPopUp($(".popup-fields-17"));
});

$(".link-fields-18").click(function() {
    openPopUp($(".popup-fields-18"));
});

$(".popup__close").click(function() {
    closePopUp($(this).parent().parent());
});
/* ------ */

/* Добавить событие в избранное */
$(".event__select").click(function() {
    $(this).toggleClass("icon-heart-outline");
    $(this).toggleClass("icon-heart");
});

/* Открыть DropDown меню */
$(".dropdown").click(function() {
    $(this).toggleClass("open");
});
$(document).ready(function () {
    $('.accordion li.accordion__dropdown > a').on('click', function(){
        var element = $(this).parent('li');
        element.toggleClass('icon-caret-down');
        element.toggleClass('icon-caret-up');
        if (element.hasClass('open')) {
            element.removeClass('open');
            element.find('li').removeClass('open');
            element.find('ul').slideUp();
        }
        else {
            element.addClass('open');
            element.children('ul').slideDown();
            element.siblings('li').children('ul').slideUp();
            element.siblings('li').removeClass('open');
            element.siblings('li').find('li').removeClass('open');
            element.siblings('li').find('ul').slideUp();
        }
    });
});
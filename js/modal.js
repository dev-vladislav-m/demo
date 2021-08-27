$(document).keydown(function(e) {
    if (e.keyCode == 27) {
        closePopUp($(".popup"))
    }
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
// опрацьовує кожен раз при прокручуванні сторінки
$(window).on('scroll', function() {
    var dist = $(window).scrollTop();

    if (dist >= 50) {
        $('.header').addClass('scrolled')
    } else {
        $('.header').removeClass('scrolled')
    }
});

$(document).ready(function() {
    window.setTimeout(function() {
        $('.fat-boy').addClass('animated')
    }, 1000)
})
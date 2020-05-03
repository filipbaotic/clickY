$(document).ready(function() {
    $(".toggle").click(function(e) {
        e.preventDefault();
        $(".toggle").toggleClass("active");
        $(".pre-hide").toggleClass("active");
        $(".post-hide").toggleClass("active");
        $(".sub").toggleClass("active");
    });
});

jQuery(document).ready(function($) {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
            $('.scroll').fadeIn('fast');
        } else {
            $('.scroll').fadeOut('fast');
        }
    });
    $('.scroll').click(function() {
        $("html, body").animate({ scrollTop: 0 }, 500);
        return false;
    });
});
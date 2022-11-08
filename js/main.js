$(document).ready(function() {
    AOS.init({
        duration: 700,
        easing: 'ease'
    });
    var show = true;
    var countbox = ".digits_list";
    $(window).on("scroll load resize", function() {
        if (!show) return false;
        var w_top = $(window).scrollTop();
        var e_top = $(countbox).offset().top;
        var w_height = $(window).height();
        var d_height = $(document).height();
        var e_height = $(countbox).outerHeight();
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.digit').css('opacity', '1');
            $('.digit').spincrement({
                thousandSeparator: " ",
                duration: 5000
            });

            show = false;
        }
    });
});
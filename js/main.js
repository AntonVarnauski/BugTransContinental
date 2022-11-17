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

$(document).ready(function() {
    let modal = document.getElementById('modal_wrapper');
    let modal_btn = document.getElementById('modal_btn');
    let close_modal = document.getElementById('close');

    modal_btn.onclick = function(e) {
        e.preventDefault();
        modal.style.display = 'block';
    };
    close_modal.onclick = function() {
        modal.style.display = 'none';
    };
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
$(document).ready(function() {
    "use strict";

    /*------------- preloader js --------------*/
    // $(window).on('load', function() {
    //     setTimeout(function() {
    //         $('.loader-wraper').fadeOut();
    //     }, 3000);
    // });


    /*------------ Start cart area  ------------*/
    $(document).on('click', function() {
        $('.cart-list').removeClass('visibleShow');
    });
    $('.myPopup > li').on('click', function(e) {
        $('.cart-list').addClass('visibleShow');
        $(this).removeClass('visibleShow');
        e.stopPropagation();
    })


    /*------------ Start site menu  ------------*/

    // Start sticky header
    $(window).on('scroll', function() {
        if ($(window).scrollTop() >= 150) {
            $('#sticky-header').addClass('sticky-menu');
        } else {
            $('#sticky-header').removeClass('sticky-menu');
        }
    });

    /*------------ Start support slider carousel ------------*/

    $('.support-slider').owlCarousel({
        margin: 10,
        loop: true,
        autoplay: true,
        smartSpeed: 1600,
        dots: false,
        autoplayTimeout: 3000,
        items: 1
    });

    /*------------ Start hero slider carousel ------------*/

    $('.hero-slider').owlCarousel({
        margin: 10,
        loop: true,
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        autoplayTimeout: 4000,
        items: 1
    });

    /*------------ Start all product carousel ------------*/

    $('.all-product').owlCarousel({
        margin: 10,
        loop: true,
        autoplay: true,
        nav: true,
        smartSpeed: 1800,
        dots: false,
        autoplayTimeout: 4500,
        autoplayHoverPause: true,
        items: 1
    });

    /*------------ Start arrival product carousel ------------*/

    $('.arrival-product').owlCarousel({
        margin: 10,
        loop: true,
        autoplay: true,
        nav: true,
        smartSpeed: 1800,
        dots: false,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        items: 1
    });

    /*------------ Start product detail thumbnail slider ------------*/
     
      $('#slider-thumb').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        sync: "#carousel"
      });

    /*------------ Start Filter options ------------*/
    $('.filter').on('click', function() {
        $('.filter-options').addClass('filter-show');
        $('.filter-options').addClass('filter-show');
    });
    $('.close-btn').on('click', function() {
        $('.filter-options').removeClass('filter-show');
    });

    /*------------ Start Filter options ------------*/
    function collision($div1, $div2) {
        var x1 = $div1.offset().left;
        var w1 = 40;
        var r1 = x1 + w1;
        var x2 = $div2.offset().left;
        var w2 = 40;
        var r2 = x2 + w2;

        if (r1 < x2 || x1 > r2) return false;
        return true;

    }

    // // slider call

    $('#slider').slider({
        range: true,
        min: 0,
        max: 500,
        values: [75, 300],
        slide: function(event, ui) {

            $('.ui-slider-handle:eq(0) .price-range-min').html('$' + ui.values[0]);
            $('.ui-slider-handle:eq(1) .price-range-max').html('$' + ui.values[1]);
            $('.price-range-both').html('<i>$' + ui.values[0] + ' - </i>$' + ui.values[1]);

            if (ui.values[0] == ui.values[1]) {
                $('.price-range-both i').css('display', 'none');
            } else {
                $('.price-range-both i').css('display', 'inline');
            }

            if (collision($('.price-range-min'), $('.price-range-max')) == true) {
                $('.price-range-min, .price-range-max').css('opacity', '0');
                $('.price-range-both').css('display', 'block');
            } else {
                $('.price-range-min, .price-range-max').css('opacity', '1');
                $('.price-range-both').css('display', 'none');
            }

        }
    });

    $('.ui-slider-range').append('<span class="price-range-both value"><i>$' + $('#slider').slider('values', 0) + ' - </i>' + $('#slider').slider('values', 1) + '</span>');

    $('.ui-slider-handle:eq(0)').append('<span class="price-range-min value">$' + $('#slider').slider('values', 0) + '</span>');

    $('.ui-slider-handle:eq(1)').append('<span class="price-range-max value">$' + $('#slider').slider('values', 1) + '</span>');


});
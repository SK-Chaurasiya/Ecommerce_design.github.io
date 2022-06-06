$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {

        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if ($(window).scrollTop() > 68) {
            $('header .header-2').addClass('header-active');
        } else {
            $('header .header-2').removeClass('header-active');
        }

        $('section').each(function () {

            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top >= offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }

        });

    });

    $('.home-slider').owlCarousel({
        items: 1,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 8000,
        loop: true
    });


    /* ===========================================================
                    owlCarousel banner/feature slider show
       =========================================================== */
    $('.feature-slider').owlCarousel({
        items: 1,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 10000,
        loop: true
    });

    /* ===========================================================
                            featured products
       =========================================================== */

    $('.small-image-watch img').click(function () {

        $(this).addClass('image-watch-active').siblings().removeClass('image-watch-active');
        let image = $(this).attr('src');
        $('.big-image-watch img').attr('src', image);

    });

    $('.small-image-console img').click(function () {

        $(this).addClass('image-console-active').siblings().removeClass('image-console-active');
        let image = $(this).attr('src');
        $('.big-image-console img').attr('src', image);

    });

    $('.small-image-laptop img').click(function () {

        $(this).addClass('image-laptop-active').siblings().removeClass('image-laptop-active');
        let image = $(this).attr('src');
        $('.big-image-laptop img').attr('src', image);

    });

    $('.gallery .btn').click(function () {

        let filter = $(this).attr('data-filter');
        if (filter == 'all') {
            $('.gallery .box').show(400);
        } else {
            $('.gallery .box').not('.' + filter).hide(200);
            $('.gallery .box').filter('.' + filter).show(400);
        }

        $(this).addClass('button-active').siblings().removeClass('button-active');

    });

});
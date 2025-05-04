(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });

    //sdgs
    $('.sdgs-carousel').owlCarousel({
        autoplay: true,
        smartSpeed: 300,
        items: 8,
        margin:10,
        responsiveClass:true,  
        dots: false,
        loop: true,
        responsive:{
                0:{
                    items:3,
                    nav:false
                },
                600:{
                    items:4,
                    nav:false
                },
                1000:{
                    items:8,
                    nav:false
                }
            }        
    });

    $('ul.tabs li').click(function () {
        var tab_id = $(this).attr('href');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    })

    $(document).ready(function(){
        // Mengambil semua elemen dalam daftar posting
        var posts = $(".post-list li");

        // Mengacak urutan elemen dalam daftar
        posts.sort(function() { return 0.5 - Math.random() });

        // Menempatkan kembali elemen dalam daftar yang sudah diacak
        $(".post-list").html(posts);
    });    

    $(document).ready(function() {
        $('#uploadForm').submit(function(event) {
            event.preventDefault();

            var formData = new FormData($(this)[0]);

            $.ajax({
                url: 'https://course.matariagro.com/quote/send.php', // Ganti dengan URL server lain
                type: 'POST',
                data: formData,
                contentType: false,
                processData: false,
                success: function(response) {
                    $('#reportContainer').html(response);
                },
                error: function(xhr, status, error) {
                    console.error(xhr.responseText);
                }
            });
        });
    });


})(jQuery);
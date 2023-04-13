window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (this.scrollY > 100) {
        navbar.style.background = "black"
    }else{
        navbar.style.background = "transparent"
    }
})




$(document).ready(function () {
    $(".owl-carousel").owlCarousel(
        {
            loop: true,
            margin: 50,
            nav: true,
            responsiveClass: true,
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                600:{
                    items: 3,
                    nav: false
                },
            }
        }
    );

    $('.owl-nav').removeClass('disabled');
    $('.owl-nav').removeClass('disabled');

    $(".owl-prev").html('<i class="bi bi-chevron-left"></i>');
    $(".owl-next").html('<i class="bi bi-chevron-right"></i>');
});
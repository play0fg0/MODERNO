$(function(){

    $(".rate-star").rateYo({
        rating: 5,
        readOnly: true,
        starWidth: "12px"
      });

    $('.product-slider__inner').slick({
        dots: true,
        arrows:false,
        slidesToShow: 3,
        slidesToScroll: 3       
    });

    $(".js-range-slider").ionRangeSlider({
            type: "double",
            min: 0,
            max: 1000,
            from: 0,
            to: 600,
            prefix: "$"
    });

    $('.icon-th-list').on('click', function(){
        $('.product__item').addClass('list');
        $('.icon-th-list').addClass('active');
        $('.icon-th-large').removeClass('active');
    });
    $('.icon-th-large').on('click', function(){
        $('.product__item').removeClass('list');
        $('.icon-th-large').addClass('active');
        $('.icon-th-list').removeClass('active');
    });

    $('.menu__btn').on('click', function(){
        $('.menu__list').slideToggle();
    });


    var mixer = mixitup('.product__inner-box');
});
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

    var mixer = mixitup('.product__inner-box');
});
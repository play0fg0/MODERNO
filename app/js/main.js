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

    var mixer = mixitup('.product__inner-box');
});
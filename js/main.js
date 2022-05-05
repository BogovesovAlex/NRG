//$(document).ready(function(){
  // $(".owl-carousel").owlCarousel();

  //$('#owl-caro').owlCarousel({
    navigation: true,
    margin:35,
    navText: ['<i class="fa fa-angle-left fa-5x"></i>', '<i class="fa fa-angle-right fa-5x"></i>'],
    pagination: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        768:{
            items:2,
            nav:true,
            dots: true
        },
        992:{
            items:3,
            nav:false,
            loop:false
        }
    }
})
});
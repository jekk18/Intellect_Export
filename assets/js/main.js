$('.main-slider').slick({
    nextArrow: false,
    prevArrow: false,
    // infinite: true,
    prevArrow:$('#left-arrow'),
    nextArrow:$('#right-arrow'),
    dots: true
  });
  
  $(document).ready(function(){
    $('.project-slider').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        nextArrow: false,
        prevArrow: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });
  });
  $(document).ready(function() {
    $(".slick-dots li button").text(" ");
 });

 $(window).scroll(function(){
    var headSticky = $('.header-container'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 1) headSticky.addClass('header-bg');
    else headSticky.removeClass('header-bg');
  });
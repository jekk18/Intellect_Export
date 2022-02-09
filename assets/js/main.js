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
        centerPadding: '150px',
        slidesToShow: 3,
        nextArrow: false,
        prevArrow: false,
        responsive: [
          {
            breakpoint: 1638,
            settings: {
              centerMode: true,
              centerPadding: '90px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 1399,
            settings: {
              centerMode: true,
              centerPadding: '90px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 1199,
            settings: {
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 991,
            settings: {
              centerMode: true,
              centerPadding: '60px',
              slidesToShow: 3
            }
          },
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
            breakpoint: 574,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '90px',
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
  $(document).on('click', '.navigation nav li', function(){
    $(this).addClass('colored').siblings().removeClass('colored');
  })

  $('.burger-lines').on('click', function(){
    $('.burger').toggleClass('opens');
  });
  function openPos(evt, positName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active-color", "");
    }
    document.getElementById(positName).style.display = "block";
    evt.currentTarget.className += " active-color";
  }

  $(document).on('click', '.burger-links ul li span', function(){
    if (!$(this).closest('.burger-links ul li').hasClass('burger-link-active')) {
      $('.burger-links ul li').removeClass('burger-link-active');    
    }
    $(this).closest('.burger-links ul li').toggleClass('burger-link-active'); 
  });

  $(document).ready(function() {
    var liLoop = document.getElementsByClassName("burger-submenu");
    for(var i = 0; i < liLoop.length; i++){
        $(liLoop[i]).closest('.burger-links ul li').addClass("arrow-hide"); 
    }

 });
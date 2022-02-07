var $speakerCarousel = $(".speaker-carousel");
var $readersLogo = $(".readers-logo");
var $confReviews = $(".conf-reviews");

  $speakerCarousel.slick({
    dots: true,
    arrows:true,
    infinite: true,
    centerPadding: '20px',
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          centerPadding: '20px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          dots: false,
          centerMode: true,
          centerPadding: '10px',
          slidesToShow: 1
        }
      }
    ]
    });


  $confReviews.slick({
  dots: true,
  infinite: true,
  centerMode: true,
  centerPadding: '20px',
  slidesToShow: 3,
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
        arrows: true,
        dots: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
  });


  if($(window).width() < 768){ 
    $(".readers-logo").slick({ 
      dots: false,
      infinite: true,
      centerMode: true,
      centerPadding: '20px',
      slidesToShow: 4,
      responsive: [
           {
          breakpoint: 480,
          settings: {
            arrows: true,
            dots: false,
            centerMode: true,
            centerPadding: '20px',
            slidesToShow: 3
          }
        }
      ]
   }); 
    
  }else{ 
    $removeClass(".readers-logo"); 
  }

 /*collapse questions*/
 $('.questions .item .collapse').click(function () {
  $(this).closest('.questions .item').find('.open').slideToggle();
  $(this).toggleClass('opened');
})




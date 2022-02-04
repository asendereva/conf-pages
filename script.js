var $speakerCarousel = $(".speaker-carousel");
var $readersLogo = $(".readers-logo");
var $confReviews = $(".conf-reviews");


$speakerCarousel.owlCarousel({ 
    items: 2, 
    loop: true,
    dots: true, 
    nav:true,
    responsive:{
      0:{
        items:1,
        dots: false,
      },
      540:{
        items:1,
        dots: false,
      },
      768:{
        items:2,
        dots: false,
      }
    },
    navText: [
      '<img src="arrow.png">',
      '<img src="arrow.png">'
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
    $(".readers-logo").owlCarousel({ 
    loop: true, 
    items: 3, 
    dots: false, 
    nav:true,
    autoplay: true, 
    autoplayTimeout: 5000, 
    navText: [
      '<img src="arrow.png">',
      '<img src="arrow.png">'
    ]
   }); 
    
  }else{ 
    $(".readers-logo").removeClass("owl-carousel"); 
  }



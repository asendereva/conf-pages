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
      },
      540:{
        items:1,
      },
      768:{
        items:2
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
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
  });

/*Это для теста отображения блока*/ 
  if($(window).width() < 768){ 
    $readersLogo.owlCarousel({ 
    loop: true, 
    items: 3, 
    dots: true, 
    autoplay: true, 
    autoplayTimeout: 5000, 
   }); 
    
  }else{ 
    $readersLogo.removeClass("owl-carousel"); 
  };
/*
  $confReviews.owlCarousel({ 
    items: 3, 
    loop: true,
    dots: true, 
    nav:true,
    responsive:{
      0:{
        items:1,
      },
      540:{
        items:1,
      },
      768:{
        items:3
      }
    },
    navText: [
      '<img src="/images/arrow.png">',
      '<img src="/images/arrow.png">'
    ]


  });*/

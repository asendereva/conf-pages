
$(".speaker-carousel").slick({
  dots: true,
  arrows:true,
  infinite: true,
  centerPadding: '20px',
  slidesToShow: 2,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1
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


  $(".conf-reviews").slick({
dots: true,
infinite: true,
centerMode: true,
centerPadding: '20px',
slidesToShow: 3,
responsive: [
  {
    breakpoint: 768,
    settings: {
      arrows: true,
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


$(".readers-logo").slick({ 
        dots: false,
        infinite: true,
        centerMode: true,
        centerPadding: '5px',
        slidesToShow: 2,
        mobileFirst: true,
        responsive: [
         {
            breakpoint: 425,
            settings: {
              arrows: true,
              dots: false,
              centerMode: true,
              centerPadding: '20px',
              slidesToShow: 4
            }
          },
          {
            breakpoint: 810,
            settings: {
              arrows: true,
              dots: false,
              centerMode: true,
              centerPadding: '20px',
              slidesToShow: 4
            }
          },
          {
            breakpoint: 820,
            settings: "unslick"
         }           
        ]
     }); 
      
      



/*collapse questions*/
$('.questions .item .collapse').click(function () {
$(this).closest('.questions .item').find('.open').slideToggle();
$(this).toggleClass('opened');
})



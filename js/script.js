$(document).ready(function () {
   $('.header__burger').click(function (event) {
      $('.header__burger, .header__nav nav').toggleClass('active');
   })
})


$(document).ready(function () {
   $('.slider').slick({
      arrows: false,
      dots: true,
      adaptiveHeight: true,
      //        centerMode: true,                  
      appendDots: $('.tabs__buttons'),
      dots: true,
      customPaging: (slick, index) => {
         return `<div class="slider__dots">tab ${index + 1}</div>`;
      }
   });
})


$(document).ready(function () {
   $('.customeslider').slick({
      arrows: false,
      dots: true,
      adaptiveHeight: true,
      dots: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnFocus: true,
      responsive: [
         {
            breakpoint: 850,
            settings: {
               slidesToShow: 2
            }
         },
         {
            breakpoint: 630,
            settings: {
               slidesToShow: 1
            }
         }
      ]
   });
})


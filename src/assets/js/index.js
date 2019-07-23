
  $(document).ready(function() {
    var swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        continuous: true,
        slidesPerView: 3
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

  });


    // $("#owl-demo").owlCarousel({
    //   navigation : true,
    //   slideSpeed : 300,
    //   paginationSpeed : 400,
    //   pagination: false,

    //   autoPlay: true,
    //   stopOnHover : true,
    //   navigationText: [
    //     "<i class='fas fa-angle-left'></i>",
    //     "<i class='fas fa-angle-right'></i>"],

    //     itemsCustom : [
    //       [0, 1],
    //       [450, 1],
    //       [600, 2],
    //       [700, 2],
    //       [1000, 3],
    //       [1200, 4],
    //       [1400, 5],
    //       [1600, 5]
    //     ],
    //   });

   





      /*
      Smooth scroll functionality for anchor links (animates the scroll
      rather than a sudden jump in the page)
      */

      // $('.js-anchor-link').click(function(e){
      //   e.preventDefault();
      //   var target = $($(this).attr('href'));
      //   if(target.length){
      //     var scrollTo = target.offset().top;
      //     $('body, html').animate({scrollTop: scrollTo+'px'}, 800);
      //   }
      // });



      $(window).load(function() {
        $('.post-module').hover(function() {
          $(this).find('.description').stop().animate({
            height: "toggle",
            opacity: "toggle"
          }, 300);
        });
      });

     
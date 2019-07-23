import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  constructor() { }

  ngOnInit() 
  {
    $(document).ready(function() {
      $('.top-first-nav').click(function() {
        $('.mobile-menu').slideToggle();
      });
    });
  
   
    $(document).ready(function() {
      $("#owl-demo").owlCarousel({
        navigation : true,
        slideSpeed : 300,
        paginationSpeed : 400,
        pagination: false,
  
        autoPlay: true,
        stopOnHover : true,
        navigationText: [
          "<i class='fas fa-angle-left'></i>",
          "<i class='fas fa-angle-right'></i>"],
  
          itemsCustom : [
            [0, 1],
            [450, 1],
            [600, 2],
            [700, 2],
            [1000, 3],
            [1200, 4],
            [1400, 5],
            [1600, 5]
          ],
        });
  
      });

      
      /*
      Smooth scroll functionality for anchor links (animates the scroll
      rather than a sudden jump in the page)
      */

     $('.js-anchor-link').click(function(e){
      e.preventDefault();
      var target = $($(this).attr('href'));
      if(target.length){
        var scrollTo = target.offset().top;
        $('body, html').animate({scrollTop: scrollTo+'px'}, 800);
      }
    });

  }

}

import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  constructor() { }
firstLoad: Boolean=true
  ngOnInit() {

    if (this.firstLoad) {
      window.scroll(0, 0);
      this.firstLoad = false;
  }

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
  }

}

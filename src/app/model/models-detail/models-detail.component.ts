import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-models-detail',
  templateUrl: './models-detail.component.html',
  styleUrls: ['./models-detail.component.css']
})
export class ModelsDetailComponent implements OnInit {
  
  constructor() { }
  firstLoad: Boolean=true
  ngOnInit() {
    {
      window.scroll(0, 0);
      this.firstLoad = false;
  }
    

  }

}

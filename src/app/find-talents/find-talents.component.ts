import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators,FormGroup} from '@angular/forms';
import { findtalentDetail } from '../Models/findtalentDetail';
import { AppServiceService } from '../service/app-service.service';

declare var $:any;
@Component({
  selector: 'app-find-talents',
  templateUrl: './find-talents.component.html',
  styleUrls: ['./find-talents.component.css']
})
export class FindTalentsComponent implements OnInit {
  findtalentForm:FormGroup;
  cform = new findtalentDetail();
  datasaved=false;
  submitted=false;
  msg:any;
  constructor(private fb:FormBuilder, private appservice:AppServiceService) { }
  firstLoad: Boolean=true


  ngOnInit() {
    if (this.firstLoad) {
      window.scroll(0, 0);
      this.firstLoad = false;
    }

    //Form Validation

    this.findtalentForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required,Validators.email]],
      company_name: ['', [Validators.required]],
      phone: ['', [Validators.required,Validators.minLength(10)]],
      state: ['', [Validators.required]],
      project_or_talent: ['', [Validators.required]],
      date_or_location: ['', [Validators.required]],
      how_know_about_us: ['', [Validators.required]],
      office_choose: ['', [Validators.required]],
      checkbox: ['', [Validators.required]],
      
    })
//Form Validation
var options = {
    mode: 'wizard',
    autoButtonsNextClass: 'btn',
    autoButtonsPrevClass: 'btn btn-black mr-10',
    stepNumberClass: 'badge badge-primary',
  
   }
$( function() {
$( "#form" ).accWizard(options);
});
     }

onSubmit(){
  
    this.cform.name= this.findtalentForm.get('name').value;
    this.cform.email= this.findtalentForm.get('email').value;
    this.cform.company_name= this.findtalentForm.get('company_name').value;
    this.cform.phone= this.findtalentForm.get('phone').value;
    this.cform.state= this.findtalentForm.get('state').value;
    this.cform.project_or_talent= this.findtalentForm.get('project_or_talent').value;
    this.cform.date_or_location= this.findtalentForm.get('date_or_location').value;
    this.cform.how_know_about_us= this.findtalentForm.get('how_know_about_us').value;
    this.cform.office_choose= this.findtalentForm.get('office_choose').value;


    this.submitted=true;
    
    
if (this.findtalentForm.invalid){
return false;
}
else {
  
console.log(this.cform);
this.appservice.findTalent(this.cform)
.subscribe(data=>{
console.log(data);
this.msg = data.msg;
this.datasaved=true;
this.submitted=false;
this.findtalentForm.reset();
    });

          }
    
  }
  mask: any[] =
  // ['+', '1', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  [/\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
}

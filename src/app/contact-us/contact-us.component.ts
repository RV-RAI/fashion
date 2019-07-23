import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';
import { AppServiceService } from '../service/app-service.service';
import { contactDetail } from '../Models/contactDetail';
declare var $:any
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  contactForm:FormGroup;
  cform = new contactDetail();
  datasaved=false;
  submitted=false;
  msg:any;

  constructor(private fb: FormBuilder, private appservice:AppServiceService ) { }
firstLoad: Boolean=true
  ngOnInit() {
    if (this.firstLoad) {
      window.scroll(0, 0);
      this.firstLoad = false;
    }

this.contactForm = this.fb.group({
  name: ['', [Validators.required]],
  email: ['', [Validators.required,Validators.email]],
  phone: ['', [Validators.required,Validators.minLength(10)]],
  message: ['', [Validators.required]],
})
  }

onContact(){
  this.cform.name= this.contactForm.get('name').value;
  this.cform.email= this.contactForm.get('email').value;
  this.cform.phone= this.contactForm.get('phone').value;
  this.cform.message= this.contactForm.get('message').value;

  this.submitted=true;

if (this.contactForm.invalid){
return false;
}
else {
console.log(this.cform);
this.appservice.creatContact(this.cform)
.subscribe(data=>{
console.log(data);
this.msg = data.msg;
this.datasaved=true;
this.submitted=false;
this.contactForm.reset();
    });

          }
  
  
}

   mask: any[] =
    // ['+', '1', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    [/\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
}

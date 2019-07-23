import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';
import { AppServiceService } from '../service/app-service.service';
import { subscribeDetail } from '../Models/subscribeDetail';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  subscribeForm:FormGroup;
  cform = new subscribeDetail();
  datasaved=false;
  submitted=false;
  msg:any;
  constructor(private fb: FormBuilder, private appservice:AppServiceService) { }

  ngOnInit() {
    this.subscribeForm = this.fb.group({
   email: ['', [Validators.required,Validators.email]],
      
    })
  }
  onSubscribe(){
    this.cform.email= this.subscribeForm.get('email').value;
    this.submitted=true;
    
    if (this.subscribeForm.invalid) {
      return false;
      }
      else{
  console.log(this.cform);
this.appservice.creatSubscribe(this.cform).subscribe(data=>{
console.log(data);
this.msg=data.msg;
this.datasaved=true;
this.submitted=false;
this.subscribeForm.reset();
  })
  
      }


  }
}

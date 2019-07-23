import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { joinDetail } from '../Models/joinDetail';
import { AppServiceService } from '../service/app-service.service';


declare var $: any;

@Component({
  selector: 'app-join-us',
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.css']
})
export class JoinUsComponent implements OnInit {

  constructor(private fb: FormBuilder, private appservice: AppServiceService) { }
  ////////////////////////////////////////////////////////////////////////////////////
  get myForm() {
    return this.joinForm.get('already_have_representation');
  }
  joinForm: FormGroup;
  public cform = new joinDetail();
  datasaved = false;
  submitted = false;
  msg: any;
  firstLoad: Boolean = true;
  mask: any[] =
    // ['+', '1', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    [/\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  ngOnInit() {
    if (this.firstLoad) {
      window.scroll(0, 0);
      this.firstLoad = false;
    }




    // Form Validation

    this.joinForm = this.fb.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      instagram_url: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      country: ['', [Validators.required]],
      state: ['', [Validators.required]],
      zip_code: ['', [Validators.required]],
      date: ['', [Validators.required]],

      about_yourself: ['', [Validators.required]],
      about_your_passion: ['', [Validators.required]],
      empower: ['', [Validators.required]],
      already_have_representation: ['', [Validators.required]],

      bust: ['', [Validators.required]],
      waist: ['', [Validators.required]],
      hip: ['', [Validators.required]],

      height: ['', [Validators.required]],
      shoe: ['', [Validators.required]],
      hair: ['', [Validators.required]],
      eye: ['', [Validators.required]],
      cup: ['', [Validators.required]],

      image1: ['', [Validators.required]],
      image2: ['', [Validators.required]],
      image3: ['', [Validators.required]],
      image4: ['', [Validators.required]],
      image5: ['', [Validators.required]],
      image6: ['', [Validators.required]],
      confirm: ['', [Validators.required]],
    });
    // Form Validation
    let options = {
      mode: 'wizard',
      autoButtonsNextClass: 'btn',
      autoButtonsPrevClass: 'btn btn-black mr-10',
      stepNumberClass: 'badge badge-primary',
    };

    $(function () {
      $('#form').accWizard(options);
    });


    ////////////// Variable decleration for base 64 url/////////////////////////
    const parentScope = this;

    ////////////////// Full Length Image//////////////////////////////////////////////////////
    function readURL1(input) {

      if (input.files && input.files[0]) {
        let reader = new FileReader();
        reader.onload = function (e) {
          $('#imagePreview1').css('background-image', 'url(' + reader.result + ')');
          $('#imagePreview1').hide();
          $('#imagePreview1').fadeIn(650);
          console.log('fullLength', reader.result);
          parentScope.cform.image1 = reader.result;

        };
        reader.readAsDataURL(input.files[0]);
      }
    }
    $('#imageUpload1').change(function () {
      readURL1(this);
    });
    ///////////////// Full Length Profile Image/////////////////////////////////////////////////
    function readURL2(input) {

      if (input.files && input.files[0]) {
        let reader = new FileReader();
        reader.onload = function (e) {
          $('#imagePreview2').css('background-image', 'url(' + reader.result + ')');
          $('#imagePreview2').hide();
          $('#imagePreview2').fadeIn(650);
          parentScope.cform.image2 = reader.result;

        };
        reader.readAsDataURL(input.files[0]);
      }
    }
    $('#imageUpload2').change(function () {
      readURL2(this);
    });

    ///////////////// Portrait Length Image /////////////////////////////////////////////////////
    function readURL3(input) {

      if (input.files && input.files[0]) {
        let reader = new FileReader();
        reader.onload = function (e) {
          $('#imagePreview3').css('background-image', 'url(' + reader.result + ')');
          $('#imagePreview3').hide();
          $('#imagePreview3').fadeIn(650);
          parentScope.cform.image3 = reader.result;
        };
        reader.readAsDataURL(input.files[0]);
      }
    }
    $('#imageUpload3').change(function () {
      readURL3(this);
    });

    ///////////////// Close Up Image/////////////////////////////////////////////////////
    function readURL4(input) {

      if (input.files && input.files[0]) {
        let reader = new FileReader();
        reader.onload = function (e) {
          $('#imagePreview4').css('background-image', 'url(' + reader.result + ')');
          $('#imagePreview4').hide();
          $('#imagePreview4').fadeIn(650);
          parentScope.cform.image4 = reader.result;
        };
        reader.readAsDataURL(input.files[0]);
      }
    }
    $('#imageUpload4').change(function () {
      readURL4(this);
    });


    ///////////////// Close Up Profile Image/////////////////////////////////////////////////////
    function readURL5(input) {
      if (input.files && input.files[0]) {

        let reader = new FileReader();
        reader.onload = function (e) {
          $('#imagePreview5').css('background-image', 'url(' + reader.result + ')');
          $('#imagePreview5').hide();
          $('#imagePreview5').fadeIn(650);
          parentScope.cform.image5 = reader.result;
        };
        reader.readAsDataURL(input.files[0]);
      }
    }
    $('#imageUpload5').change(function () {
      readURL5(this);
    });


    ///////////////// Personality Pic image/////////////////////////////////////////////////////
    function readURL6(input) {

      if (input.files && input.files[0]) {
        let reader = new FileReader();
        reader.onload = function (e) {
          $('#imagePreview6').css('background-image', 'url(' + reader.result + ')');
          $('#imagePreview6').hide();
          $('#imagePreview6').fadeIn(650);
          parentScope.cform.image6 = reader.result;
        };
        reader.readAsDataURL(input.files[0]);
      }
    }
    $('#imageUpload6').change(function () {
      readURL6(this);
    });


  }
  onJoin() {
    this.cform.first_name = this.joinForm.get('first_name').value;
    this.cform.last_name = this.joinForm.get('last_name').value;
    this.cform.instagram_url = this.joinForm.get('instagram_url').value;
    this.cform.email = this.joinForm.get('email').value;
    this.cform.phone = this.joinForm.get('phone').value;
    this.cform.address = this.joinForm.get('address').value;
    this.cform.city = this.joinForm.get('city').value;
    this.cform.country = this.joinForm.get('country').value;
    this.cform.zip_code = this.joinForm.get('zip_code').value;
    this.cform.state = this.joinForm.get('state').value;
    this.cform.date = this.joinForm.get('date').value;
    this.cform.about_yourself = this.joinForm.get('about_yourself').value;
    this.cform.about_your_passion = this.joinForm.get('about_your_passion').value;
    this.cform.empower = this.joinForm.get('empower').value;
    // this.cform. already_have_representation= this.joinForm.get(' already_have_representation').value;
    this.cform.bust = this.joinForm.get('bust').value;
    this.cform.waist = this.joinForm.get('waist').value;
    this.cform.hip = this.joinForm.get('hip').value;
    this.cform.height = this.joinForm.get('height').value;
    this.cform.shoe = this.joinForm.get('shoe').value;
    this.cform.hair = this.joinForm.get('hair').value;
    this.cform.eye = this.joinForm.get('eye').value;
    this.cform.cup = this.joinForm.get('cup').value;


    this.submitted = true;

    console.log(this.cform);
    if (this.joinForm.invalid) {
      return false;
    } else {

      console.log(this.cform);
      ;

      this.appservice.joinUs(this.cform)
        .subscribe(data => {
          console.log(data);
          this.msg = data.msg;
          this.datasaved = true;
          this.submitted = false;
          this.joinForm.reset();
        });

    }

  }
}





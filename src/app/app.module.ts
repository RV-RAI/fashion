import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { JoinUsComponent } from './join-us/join-us.component';
import { EventComponent } from './events/event/event.component';
import { OurEventComponent } from './events/our-event/our-event.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { HeaderLogoComponent } from './header-logo/header-logo.component';
import { ModelsComponent } from './model/models/models.component';
import { ModelsDetailComponent } from './model/models-detail/models-detail.component';
import { FindTalentsComponent } from './find-talents/find-talents.component';
import { AppServiceService } from './service/app-service.service';
import { ModelHomeComponent } from './model/model-home/model-home.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingpageComponent,
    ContactUsComponent,
    AboutUsComponent,
    JoinUsComponent,
    EventComponent,
    OurEventComponent,
    EventDetailComponent,
    HeaderLogoComponent,
    ModelsComponent,
    ModelsDetailComponent,
    FindTalentsComponent,
    ModelHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule,
    HttpClientModule,
   
  ],
  providers: [AppServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

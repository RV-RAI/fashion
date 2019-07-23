import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { JoinUsComponent } from './join-us/join-us.component';
import { EventComponent } from './events/event/event.component';
import { OurEventComponent } from './events/our-event/our-event.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { ModelsComponent } from './model/models/models.component';
import { ModelsDetailComponent } from './model/models-detail/models-detail.component';
import { FindTalentsComponent } from './find-talents/find-talents.component';
import { ModelHomeComponent } from './model/model-home/model-home.component';

const routes: Routes = [
  {path:'', component:LandingpageComponent},
  {path:'aboutUs', component:AboutUsComponent},
  {path:'contactUs', component:ContactUsComponent},
  {path:'joinUs', component:JoinUsComponent},
  {path:'findTalents', component:FindTalentsComponent},

  {path:'event', component:EventComponent,
children:[
  {path:'', component:OurEventComponent},
  {path:'eventDetail', component:EventDetailComponent},
]},

{path:'models', component:ModelHomeComponent,
children:[
  {path:'', component:ModelsComponent},
  {path:'modelsDetail', component:ModelsDetailComponent},
]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

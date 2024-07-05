import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { EnquiryComponent } from './enquiry/enquiry.component';

const routes: Routes = [
 {
  path: '',
  component: LandingComponent
 },
 {
   path: 'home',
   component: EnquiryComponent
 }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

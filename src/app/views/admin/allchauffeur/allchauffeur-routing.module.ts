import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllchauffeurComponent } from './allchauffeur.component';

const routes: Routes = [
  {path:'',component:AllchauffeurComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllchauffeurRoutingModule { }

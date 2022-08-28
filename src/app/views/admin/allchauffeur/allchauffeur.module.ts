import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllchauffeurRoutingModule } from './allchauffeur-routing.module';
import { AllchauffeurComponent } from './allchauffeur.component';
import { FormsModule } from '@angular/forms';
import { ViewChauffeurComponent } from './view-chauffeur/view-chauffeur.component';


@NgModule({
  declarations: [
    AllchauffeurComponent,
    ViewChauffeurComponent
  ],
  imports: [
    CommonModule,
    AllchauffeurRoutingModule,
    FormsModule
  ]
})
export class AllchauffeurModule { }

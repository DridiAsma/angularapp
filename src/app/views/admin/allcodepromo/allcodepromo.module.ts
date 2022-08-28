import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllcodepromoRoutingModule } from './allcodepromo-routing.module';
import { AllcodepromoComponent } from './allcodepromo.component';


@NgModule({
  declarations: [
    AllcodepromoComponent
  ],
  imports: [
    CommonModule,
    AllcodepromoRoutingModule
  ]
})
export class AllcodepromoModule { }

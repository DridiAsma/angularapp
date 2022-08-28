import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllclientRoutingModule } from './allclient-routing.module';
import { AllclientComponent } from './allclient.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AllclientComponent
  ],
  imports: [
    CommonModule,
    AllclientRoutingModule,
    FormsModule
  ]
})
export class AllclientModule { }

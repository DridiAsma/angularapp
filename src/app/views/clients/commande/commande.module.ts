import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";

import { CommandeRoutingModule } from './commande-routing.module';
import { GoogleMapsModule } from '@angular/google-maps'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CommandeRoutingModule,
    GooglePlaceModule,
   
  ]
})
export class CommandeModule { }

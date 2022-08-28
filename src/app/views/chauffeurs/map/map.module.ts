import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapRoutingModule } from './map-routing.module';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MapRoutingModule,
    GooglePlaceModule
  ]
})
export class MapModule { }

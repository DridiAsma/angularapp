import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapadminRoutingModule } from './mapadmin-routing.module';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MapadminRoutingModule,
    FormsModule,
    AgmCoreModule.forRoot({apiKey:'AIzaSyCNMgSJml7Zm1_mgLT2Fgw4_vSjGt6hwvs'})
  ]
})
export class MapadminModule { }

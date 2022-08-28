import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapadminComponent } from './mapadmin.component';

const routes: Routes = [
  {path:'',component:MapadminComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapadminRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypevehicleComponent } from './typevehicle.component';

const routes: Routes = [
  {path:'',component:TypevehicleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypevehicleRoutingModule { }

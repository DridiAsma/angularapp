import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListerequeteClientComponent } from './listerequete-client.component';

const routes: Routes = [
  {path:'', component:ListerequeteClientComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListerequeteClientRoutingModule { }

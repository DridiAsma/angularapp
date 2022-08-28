import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllclientComponent } from './allclient.component';

const routes: Routes = [
  {path:'',component:AllclientComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllclientRoutingModule { }

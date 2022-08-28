import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllcodepromoComponent } from './allcodepromo.component';

const routes: Routes = [
  {path:'',component:AllcodepromoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllcodepromoRoutingModule { }

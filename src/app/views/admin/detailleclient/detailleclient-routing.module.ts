import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailleclientComponent } from './detailleclient.component';

const routes: Routes = [
  {path:'',component:DetailleclientComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailleclientRoutingModule { }

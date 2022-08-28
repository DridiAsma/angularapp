import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditnotifComponent } from './editnotif.component';

const routes: Routes = [
  {path:'',component:EditnotifComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditnotifRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeContactComponent } from './liste-contact.component';

const routes: Routes = [
  {path:'', component:ListeContactComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListeContactRoutingModule { }

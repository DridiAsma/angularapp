import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListerequeteChauffeurComponent } from './listerequete-chauffeur.component';

const routes: Routes = [
  {path:'', component:ListerequeteChauffeurComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListerequeteChauffeurRoutingModule { }

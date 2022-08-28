import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteStarComponent } from './note-star.component';

const routes: Routes = [
  {path:'', component:NoteStarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoteStarRoutingModule { }

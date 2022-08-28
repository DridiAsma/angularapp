import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodepromoComponent } from './codepromo.component';

const routes: Routes = [
  {path:'',component:CodepromoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CodepromoRoutingModule { }

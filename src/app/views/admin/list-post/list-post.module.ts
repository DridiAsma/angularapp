import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListPostRoutingModule } from './list-post-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdatePostComponent } from './update-post/update-post.component';


@NgModule({
  declarations: [
    UpdatePostComponent
  ],
  imports: [
    CommonModule,
    ListPostRoutingModule,
    ReactiveFormsModule


  ]
})
export class ListPostModule { }

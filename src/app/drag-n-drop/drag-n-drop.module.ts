import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { DragNDropComponent } from './drag-n-drop.component';
import { DragNDropRoutingModule } from './drag-n-drop-routing.module';

@NgModule({
  declarations: [
    DragNDropComponent
  ],
  imports: [
    CommonModule,
    DragNDropRoutingModule,
    DragDropModule
  ]
})
export class DragNDropModule { }

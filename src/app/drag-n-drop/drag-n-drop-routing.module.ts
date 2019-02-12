import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DragNDropComponent } from './drag-n-drop.component';

const routes: Routes = [
  {
    path: "",
    component: DragNDropComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DragNDropRoutingModule { }
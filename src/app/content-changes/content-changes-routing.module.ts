import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentChangesComponent } from './content-changes.component';

const routes: Routes = [
  {
    path: "",
    component: ContentChangesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentChangesRoutingModule { }
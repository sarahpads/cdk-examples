import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'content-changes',
    loadChildren: './content-changes/content-changes.module#ContentChangesModule'
  },

  {
    path: 'drag-n-drop',
    loadChildren: './drag-n-drop/drag-n-drop.module#DragNDropModule'
  },

  {
    path: 'overlay',
    loadChildren: './overlay/overlay.module#OverlayModule'
  },

  {
    path: 'portal/:itemId',
    loadChildren: './portal/portal.module#PortalModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverlayComponent } from './overlay.component';
import { OverlayRoutingModule } from './overlay-routing.module';

@NgModule({
  declarations: [
    OverlayComponent
  ],
  imports: [
    CommonModule,
    OverlayRoutingModule
  ]
})
export class OverlayModule { }

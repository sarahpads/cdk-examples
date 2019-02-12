import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalComponent } from './portal.component';
import { PortalRoutingModule } from './portal-routing.module';
import { AnimalComponent } from './animal/animal.component';
import { CarComponent } from './car/car.component';

@NgModule({
  declarations: [
    PortalComponent,
    AnimalComponent,
    CarComponent
  ],
  entryComponents: [
    AnimalComponent,
    CarComponent
  ],
  imports: [
    CommonModule,
    PortalRoutingModule
  ]
})
export class PortalModule { }

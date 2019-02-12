import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObserversModule } from '@angular/cdk/observers';

import { ContentChangesComponent } from './content-changes.component';
import { ContentChangesRoutingModule } from './content-changes-routing.module';

@NgModule({
  declarations: [
    ContentChangesComponent
  ],
  imports: [
    CommonModule,
    ContentChangesRoutingModule,
    ObserversModule
  ]
})
export class ContentChangesModule { }

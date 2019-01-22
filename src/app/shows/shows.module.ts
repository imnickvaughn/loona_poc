import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowsRoutingModule } from './shows-routing.module';
import { ShowsComponent } from './shows.component';

@NgModule({
  declarations: [ShowsComponent],
  imports: [
    CommonModule,
    ShowsRoutingModule,
    SharedModule
  ]
})
export class ShowsModule { }

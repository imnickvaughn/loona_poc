import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentariesRoutingModule } from './documentaries-routing.module';
import { DocumentariesComponent } from './documentaries.component';

@NgModule({
  declarations: [DocumentariesComponent],
  imports: [
    CommonModule,
    DocumentariesRoutingModule
  ]
})
export class DocumentariesModule { }

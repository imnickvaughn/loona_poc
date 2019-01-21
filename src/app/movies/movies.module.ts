import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoonaModule } from '@loona/angular';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { MoviesState } from './movies.state';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MatSnackBarModule,
    MoviesRoutingModule,
    LoonaModule.forChild([MoviesState]),
  ],
  declarations: [MoviesComponent],
})
export class MoviesModule { }
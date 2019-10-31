import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridComponent } from './grid.component';
import { MatIconModule } from '@angular/material';

@NgModule({
  declarations: [
    GridComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    GridComponent,
  ]
})
export class GridModule { }

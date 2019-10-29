import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import { ToolboxComponent } from './toolbar.component';

@NgModule({
  declarations: [
    ToolboxComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  exports: [
    ToolboxComponent,
  ]
})
export class ToolboxModule { }

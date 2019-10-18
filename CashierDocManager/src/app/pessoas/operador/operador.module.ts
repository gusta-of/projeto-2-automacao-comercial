import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DATE_LOCALE } from '@angular/material';

import { OperadorComponent } from './operador.component';
import { ExportingMaterialModule } from '../exporting-material.module';

@NgModule({
  declarations: [
    OperadorComponent
  ],
  imports: [
    CommonModule,
    ExportingMaterialModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},
  ],
})
export class OperadorModule { }

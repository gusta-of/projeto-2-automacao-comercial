import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DATE_LOCALE } from '@angular/material';

/** Imports da app */
import { OperadorComponent } from './operador.component';
import { ExportingMaterialModule } from '../exporting-material.module';
import { OperadorRoutingModule } from './operador.routing.module';

@NgModule({
  declarations: [
    OperadorComponent
  ],
  imports: [
    CommonModule,
    ExportingMaterialModule,
    OperadorRoutingModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},
  ],
})
export class OperadorModule { }

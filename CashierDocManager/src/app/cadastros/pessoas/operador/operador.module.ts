import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DATE_LOCALE } from '@angular/material';

/** Imports da app */
import { OperadorComponent } from './operador.component';
import { ToolboxModule } from 'src/app/global/toolbar/toolbar.module';
import { ExportingMaterialModule } from '../../exporting-material.module';

@NgModule({
  declarations: [
    OperadorComponent
  ],
  imports: [
    CommonModule,
    ExportingMaterialModule,
    ToolboxModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
  ],
})
export class OperadorModule { }

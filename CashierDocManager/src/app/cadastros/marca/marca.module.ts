import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarcaComponent } from './marca.component';
import { ExportingMaterialModule } from '../exporting-material.module';
import { SharedModule } from 'src/app/global/shared.module';

@NgModule({
  declarations: [
    MarcaComponent
  ],
  imports: [
    CommonModule,
    ExportingMaterialModule,
    SharedModule
  ]
})
export class MarcaModule { }

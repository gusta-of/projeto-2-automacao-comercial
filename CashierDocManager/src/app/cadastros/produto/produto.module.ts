import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoComponent } from './produto.component';
import { ExportingMaterialModule } from '../exporting-material.module';

@NgModule({
  declarations: [
    ProdutoComponent
  ],
  imports: [
    CommonModule,
    ExportingMaterialModule
  ]
})
export class ProdutoModule { }

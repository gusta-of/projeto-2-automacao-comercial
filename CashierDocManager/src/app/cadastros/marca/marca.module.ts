import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarcaComponent } from './marca.component';
import { ExportingMaterialModule } from '../exporting-material.module';
import { GridModule } from 'src/app/global/grid/grid.module';

@NgModule({
  declarations: [
    MarcaComponent
  ],
  imports: [
    CommonModule,
    ExportingMaterialModule,
    GridModule
  ]
})
export class MarcaModule { }

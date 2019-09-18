import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaixaComponent } from './caixa.component';
import { CaixaMenuEsquerdoComponent } from './caixa-menu-esquerdo/caixa-menu-esquerdo.component';
import { ButtonModule } from 'primeng/button';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MenuSuperiorComponent } from '../menu-superior/menu-superior.component';
import { GridCaixaComponent } from './grid-caixa/grid-caixa.component';
import { DataTableModule } from "primeng/primeng";
import { TableModule } from "primeng/table";
import { MenuLateralComponent } from '../menu-lateral/menu-lateral.component';

@NgModule({
  declarations: [
    CaixaComponent,
    CaixaMenuEsquerdoComponent,
  MenuSuperiorComponent,
  MenuLateralComponent,
  GridCaixaComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    ButtonModule,
    DataTableModule,
    TableModule
  ],
  exports: [
    CaixaComponent
  ]
})
export class CaixaModule { }

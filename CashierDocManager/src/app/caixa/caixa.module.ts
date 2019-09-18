import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaixaComponent } from './caixa.component';
import { ButtonModule } from 'primeng/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridCaixaComponent } from './grid-caixa/grid-caixa.component';
import { TableModule } from "primeng/table";
import { CaixaMenuComponent } from './caixa-menu/caixa-menu.component';

@NgModule({
  declarations: [
    GridCaixaComponent,
    CaixaMenuComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    ButtonModule,
    TableModule
  ],
  exports: [
    GridCaixaComponent,
    CaixaMenuComponent
  ]
})
export class CaixaModule { }

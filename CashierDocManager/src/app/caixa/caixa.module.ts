import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaixaComponent } from './caixa.component';
import { ButtonModule } from 'primeng/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridCaixaComponent } from './grid-caixa/grid-caixa.component';
import { TableModule } from "primeng/table";
import { CaixaMenuComponent } from './caixa-menu/caixa-menu.component';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputCaixaComponent } from './input-caixa/input-caixa.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    GridCaixaComponent,
    CaixaMenuComponent,
    InputCaixaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    ButtonModule,
    TableModule,
    AutoCompleteModule,
    FormsModule
  ],
  exports: [
    GridCaixaComponent,
    CaixaMenuComponent,
    InputCaixaComponent
  ]
})
export class CaixaModule { }

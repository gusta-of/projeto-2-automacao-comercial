import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridCaixaComponent } from './grid-caixa/grid-caixa.component';
import { TableModule } from "primeng/table";
import { CaixaMenuComponent } from './caixa-menu/caixa-menu.component';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputCaixaComponent } from './input-caixa/input-caixa.component';
import { FormsModule }   from '@angular/forms';
import { CardsComponent } from './cards/cards.component';


@NgModule({
  declarations: [
    GridCaixaComponent,
    CaixaMenuComponent,
    CardsComponent,
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
    CardsComponent,
    InputCaixaComponent
  ]
})
export class CaixaModule { }

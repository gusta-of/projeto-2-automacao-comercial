import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaixaComponent } from './caixa.component';
import { CaixaMenuEsquerdoComponent } from './caixa-menu-esquerdo/caixa-menu-esquerdo.component';
import { ButtonModule } from 'primeng/button';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    CaixaComponent,
    CaixaMenuEsquerdoComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    ButtonModule
  ],
  exports: [
    CaixaComponent
  ]
})
export class CaixaModule { }

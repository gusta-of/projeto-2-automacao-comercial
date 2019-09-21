import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import { GridCaixaComponent } from './grid-caixa/grid-caixa.component';
import { CaixaMenuComponent } from './caixa-menu/caixa-menu.component';
import { InputCaixaComponent } from './input-caixa/input-caixa.component';
import { CardsComponent } from './cards/cards.component';
import { VendasService } from './vendas.service';
import { CaixaComponent } from './caixa.component';
import { CaixaRoutingModule } from './caixa.routing.module';


@NgModule({
  declarations: [
    GridCaixaComponent,
    CaixaMenuComponent,
    CardsComponent,
    InputCaixaComponent,
    CaixaComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    CaixaRoutingModule
  ],
  providers: [ 
    VendasService
  ]
})
export class CaixaModule { }

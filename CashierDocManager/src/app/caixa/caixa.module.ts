import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

/* Componentes */
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
    CaixaRoutingModule,
    MatInputModule,
    MatCardModule,
    CurrencyMaskModule,
    MatButtonModule,
    MatSelectModule
  ]
})
export class CaixaModule { }

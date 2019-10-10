import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';

/* Componentes */
import { GridCaixaComponent } from './grid-caixa/grid-caixa.component';
import { InputCaixaComponent } from './input-caixa/input-caixa.component';
import { CardsComponent } from './cards/cards.component';
import { CaixaComponent } from './caixa.component';
import { CaixaRoutingModule } from './caixa.routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GridCaixaComponent,
    CardsComponent,
    InputCaixaComponent,
    CaixaComponent,
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
    MatSelectModule,
    ReactiveFormsModule,
    MatRadioModule,                
    FormsModule
  ]
})
export class CaixaModule { }

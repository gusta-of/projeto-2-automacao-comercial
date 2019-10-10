import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';

import { MarcaComponent } from './marca.component';
import { MarcaRoutingModule } from './marca.routing.module';
import { CadastrosComponent } from '../cadastros.component';

@NgModule({
  declarations: [
    MarcaComponent,
    CadastrosComponent
  ],
  imports: [
    CommonModule,
    MarcaRoutingModule,
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule
  ]
})
export class MarcaModule { }

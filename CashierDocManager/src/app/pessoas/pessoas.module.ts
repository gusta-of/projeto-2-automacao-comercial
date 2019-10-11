import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

/** Components */
import { UsusariosRoutingModule } from './usuarios.routing.module';
import { OperadorModule } from './operador/operador.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UsusariosRoutingModule,
    UsusariosRoutingModule,
    OperadorModule
  ]
})
export class PessoasModule { }

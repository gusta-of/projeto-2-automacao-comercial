import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

/** Components */
import { UsusariosRoutingModule } from './usuarios.routing.module';
import { OperadorComponent } from './operador/operador.component';




@NgModule({
  declarations: [
    OperadorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UsusariosRoutingModule 
  ]
})
export class PessoasModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsusariosRoutingModule } from './usuarios.routing.module';
import { OperadorComponent } from './operador/operador.component';



@NgModule({
  declarations: [
    OperadorComponent
  ],
  imports: [
    CommonModule,
    UsusariosRoutingModule 
  ]
})
export class PessoasModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsusariosRoutingModule } from './usuarios.routing.module';
import { UsuariosComponent } from './usuarios/usuarios.component';



@NgModule({
  declarations: [
    UsuariosComponent
  ],
  imports: [
    CommonModule,
    UsusariosRoutingModule 
  ]
})
export class PessoasModule { }

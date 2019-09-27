import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

/** Components */
import { UsusariosRoutingModule } from './usuarios.routing.module';
import { UsuariosComponent } from './usuarios/usuarios.component';




@NgModule({
  declarations: [
    UsuariosComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UsusariosRoutingModule 
  ]
})
export class PessoasModule { }

import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import {UsuarioComponent} from './usuario/usuario.component';
import {UsuarioRoutingModule} from './usuario-routing/usuario-routing.module';
import {UsuarioRoutingComponent} from './usuario-routing/usuario-routing.component';
import {CustomMaterialModule} from './custom-material.module';
import { ClienteModule } from './cliente/cliente.module';
import { OperadorModule } from '../operador';

@NgModule({
  declarations: [
    UsuarioRoutingComponent,
    UsuarioComponent
  ],
  imports: [
    /** ANGULAR IMPORTS */
    CommonModule,
    ReactiveFormsModule,
    ClienteModule,

    /** UsuarioModule IMPORTS */
    UsuarioRoutingModule,
    CustomMaterialModule,
  ]
})
export class UsuarioModule {}

import { NgModule } from '@angular/core';
import { PessoaRoutingModule } from './pessoa.routing.module';
import { CommonModule } from '@angular/common';
import { ClienteModule } from './cliente/cliente.module';
import { OperadorModule } from './operador/operador.module';

@NgModule({
    imports: [
        CommonModule,
        PessoaRoutingModule,
        OperadorModule,
        ClienteModule,
    ],
    bootstrap: []
})
export class PessoasModule { }
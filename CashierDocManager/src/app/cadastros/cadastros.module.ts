import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastrosRoutingModule } from './cadastros.routing.module';
import { MarcaModule } from './marca/marca.module';
import { ProdutoModule } from './produto/produto.module';
import { ClienteModule } from './pessoas/cliente/cliente.module';
import { OperadorModule } from './pessoas/operador/operador.module';

@NgModule({
    imports: [
        CommonModule,
        CadastrosRoutingModule,
        MarcaModule,
        ProdutoModule,
        ClienteModule,
        OperadorModule
    ],
    bootstrap: []
})
export class CadastrosModule { }
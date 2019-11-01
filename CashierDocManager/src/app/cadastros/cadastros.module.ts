import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastrosRoutingModule } from './cadastros.routing.module';
import { MarcaModule } from './marca/marca.module';
import { ProdutoModule } from './produto/produto.module';
import { CadastroInitialRoutingComponent } from './cadastro-initial-routing.component';

@NgModule({
    declarations: [
        CadastroInitialRoutingComponent,
    ],
    imports: [
        CommonModule,
        CadastrosRoutingModule,
        MarcaModule,
        ProdutoModule,
    ],
    bootstrap: []
})
export class CadastrosModule { }
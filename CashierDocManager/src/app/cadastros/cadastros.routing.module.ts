import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarcaComponent } from './marca/marca.component';
import { ProdutoComponent } from './produto/produto.component';
import { ClienteComponent } from './pessoas/cliente/cliente.component';
import { OperadorComponent } from './pessoas/operador/operador.component';

const routing: Routes = [
    { path: 'marca', component: MarcaComponent },
    { path: 'produto', component: ProdutoComponent },
    { path: 'cliente', component: ClienteComponent },
    { path: 'operador', component: OperadorComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routing)],
    exports: [RouterModule]
})
export class CadastrosRoutingModule { }
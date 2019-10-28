import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OperadorComponent } from './operador/operador.component';
import { ClienteComponent } from './cliente/cliente.component';

const routing: Routes = [
    { path: 'operador', component: OperadorComponent },
    { path: 'cliente', component: ClienteComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routing)],
    exports: [RouterModule]
})
export class PessoaRoutingModule { }
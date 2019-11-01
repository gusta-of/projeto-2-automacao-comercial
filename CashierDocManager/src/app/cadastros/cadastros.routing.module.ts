import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarcaComponent } from './marca/marca.component';
import { ProdutoComponent } from './produto/produto.component';
import { CadastroInitialRoutingComponent } from './cadastro-initial-routing.component';

const routing: Routes = [
    {
        path: "cadastro",
        component: CadastroInitialRoutingComponent,
        children: [
            { path: 'marca', component: MarcaComponent },
            { path: 'produto', component: ProdutoComponent },
            {
                path: "usuario",
                loadChildren: () => import('./usuario/usuario.module').then((m) => m.UsuarioModule),
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routing)],
    exports: [RouterModule]
})
export class CadastrosRoutingModule { }
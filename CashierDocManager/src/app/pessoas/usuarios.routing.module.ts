import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { OperadorComponent } from './operador/operador.component';

const usuariosRouting: Routes = [ 
    { path: 'operador', component: OperadorComponent }
];

@NgModule({
    imports: [RouterModule.forChild(usuariosRouting)],
    exports: [RouterModule]
})
export class UsusariosRoutingModule {

}
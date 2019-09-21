import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { UsuariosComponent } from './usuarios/usuarios.component';

const usuariosRouting: Routes = [ 
    {path: 'usuarios', component: UsuariosComponent}
];

@NgModule({
    imports: [RouterModule.forChild(usuariosRouting)],
    exports: [RouterModule]
})
export class UsusariosRoutingModule {

}
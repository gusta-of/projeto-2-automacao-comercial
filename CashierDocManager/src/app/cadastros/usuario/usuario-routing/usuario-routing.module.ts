import {NgModule} from '@angular/core';
import {Router, Route, RouterModule} from '@angular/router';

import {UsuarioComponent} from '../usuario/usuario.component';
import {UsuarioRoutingComponent} from './usuario-routing.component';
import { ClienteComponent } from '../cliente/cliente.component';
import { OperadorComponent } from '../../operador';

const routes: Route[] = [
  {
    path: '',
    component: UsuarioRoutingComponent,
    children: [
      {
        path: 'operador',
        loadChildren: () => import('../../operador/operador.module').then((m) => m.OperadorModule),
      },
      {
        path: 'cliente',
        component: ClienteComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioRoutingModule {}

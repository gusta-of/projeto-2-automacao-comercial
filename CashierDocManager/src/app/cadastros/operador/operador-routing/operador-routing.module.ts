import {NgModule} from '@angular/core';
import {Router, Route, RouterModule} from '@angular/router';

import {OperadorComponent} from '../operador/operador.component';
import {OperadorRoutingComponent} from './operador-routing.component';

const routes: Route[] = [
  {
    path: '',
    component: OperadorRoutingComponent,
    children: [
      {
        path: '',
        component: OperadorComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OperadorRoutingModule {}

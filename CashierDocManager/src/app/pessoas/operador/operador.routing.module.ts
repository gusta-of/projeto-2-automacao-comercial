import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OperadorComponent } from './operador.component';

const routing: Routes = [
    { path: '', component: OperadorComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routing)],
    exports: [RouterModule]
})
export class OperadorRoutingModule { }
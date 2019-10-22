import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaixaComponent } from './caixa.component';

const caixaRoutes: Routes = [
    { path: '', component: CaixaComponent }
];

@NgModule({
    imports: [RouterModule.forChild(caixaRoutes)],
    exports: [RouterModule]
})
export class CaixaRoutingModule {}
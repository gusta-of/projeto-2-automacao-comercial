import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutoComponent } from './produto.component';

const produtoRoutes: Routes = [
    { path: '', component: ProdutoComponent }
];

@NgModule({
    imports: [RouterModule.forChild(produtoRoutes)],
    exports: [RouterModule]
})
export class ProdutoRoutingModule {}
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarcaComponent } from './marca.component';
import { CadastrosComponent } from '../cadastros.component';

const marcaRoutes: Routes = [
    { path: '', component: MarcaComponent },
    { path: '', component: CadastrosComponent }
];

@NgModule({
    imports: [RouterModule.forChild(marcaRoutes)],
    exports: [RouterModule]
})
export class MarcaRoutingModule {}
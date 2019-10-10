import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarcaComponent } from './marca.component';

const marcaRoutes: Routes = [
    { path: 'marca', component: MarcaComponent }
];

@NgModule({
    imports: [RouterModule.forChild(marcaRoutes)],
    exports: [RouterModule]
})
export class MarcaRoutingModule {}
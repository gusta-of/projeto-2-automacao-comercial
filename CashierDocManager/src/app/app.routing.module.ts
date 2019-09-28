import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'home', component: HomePageComponent },
    { path: 'caixa', loadChildren: ()=> import("./caixa/caixa.module").then(m => m.CaixaModule )}
];

@NgModule({
    imports: [RouterModule.forRoot(routes,  { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule]
})
export class AppRoutingModule {}
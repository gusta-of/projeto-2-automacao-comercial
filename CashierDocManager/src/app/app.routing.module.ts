import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomePageComponent },
    { path: 'caixa', loadChildren: ()=> import("./caixa/caixa.module").then(m => m.CaixaModule )},
    { path: '', loadChildren: ()=> import("./pessoas/pessoas.module").then(m => m.PessoasModule)},
    { path: 'marca', loadChildren: ()=> import("./cadastros/marca/marca.module").then(m => m.MarcaModule)},
    { path: 'produto', loadChildren: ()=> import("./cadastros/produto/produto.module").then(m => m.ProdutoModule)}
];

@NgModule({
    imports: [RouterModule.forRoot(routes,  { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule]
})
export class AppRoutingModule {}
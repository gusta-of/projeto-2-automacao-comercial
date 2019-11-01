import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { AuthGuard } from './data-access/rest/GuardRouter/AuthGuard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'home',
        component: HomePageComponent,
        canActivate: [AuthGuard],
        children: [
            { path: 'caixa', loadChildren: () => import("./caixa/caixa.module").then(m => m.CaixaModule) },
            { path: '', loadChildren: () => import("./cadastros/cadastros.module").then(m => m.CadastrosModule) }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
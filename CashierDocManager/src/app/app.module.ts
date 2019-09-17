import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { CaixaComponent } from './caixa/caixa.component';
import { CaixaModule } from './caixa/caixa.module';

@NgModule({
  declarations: [
    AppComponent
=======
import { CaixaModule } from './caixa/caixa.module';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuLateralComponent
>>>>>>> 4085682c40d09b7172fd52ee4f1abe7e357ffd07
  ],
  imports: [
    BrowserModule,
    CaixaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

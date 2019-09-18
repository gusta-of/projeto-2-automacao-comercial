import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CaixaModule } from './caixa/caixa.module';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CaixaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

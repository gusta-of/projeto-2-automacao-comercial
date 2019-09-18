import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CaixaModule } from './caixa/caixa.module';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { MenuSuperiorComponent } from './menu-superior/menu-superior.component';
import { CaixaComponent } from './caixa/caixa.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuLateralComponent,
    MenuSuperiorComponent,
    CaixaComponent
  ],
  imports: [
    BrowserModule,
    CaixaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

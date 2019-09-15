import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CaixaComponent } from './caixa/caixa.component';
import { CaixaModule } from './caixa/caixa.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CaixaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

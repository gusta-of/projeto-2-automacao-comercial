import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

import { AppComponent } from './app.component';
import { CaixaModule } from './caixa/caixa.module';
import { HomePageComponent } from './home-page/home-page.component';
import { AppRoutingModule } from './app.routing.module';
import { PessoasModule } from './pessoas/pessoas.module';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  imports: [
    CaixaModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    CaixaModule,
    AppRoutingModule,
    PessoasModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

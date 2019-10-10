import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CaixaModule } from './caixa/caixa.module';
import { HomePageComponent } from './home-page/home-page.component';
import { AppRoutingModule } from './app.routing.module';
import { PessoasModule } from './pessoas/pessoas.module';
import { MarcaModule } from './cadastros/marca/marca.module';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  imports: [
    CaixaModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    CaixaModule,
    AppRoutingModule,
    PessoasModule,
    MarcaModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

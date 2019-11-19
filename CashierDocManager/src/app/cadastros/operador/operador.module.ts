import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DATE_LOCALE } from '@angular/material';

/** Imports da app */
import { OperadorComponent } from './operador/operador.component';
import { CustomMaterialModule } from './custom-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { OperadorRoutingModule } from './operador-routing/operador-routing.module';
import { OperadorRoutingComponent } from './operador-routing/operador-routing.component';
import { ResponseEmitterService } from 'src/app/data-access/rest/response-emitter.service';

@NgModule({
  declarations: [
    OperadorComponent,
    OperadorRoutingComponent
  ],
  imports: [
    /** ANGULAR IMPORTS */
    CommonModule,
    ReactiveFormsModule,

    /** UsuarioModule IMPORTS */
    OperadorRoutingModule,
    CustomMaterialModule,
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    ResponseEmitterService
  ]
})
export class OperadorModule { }

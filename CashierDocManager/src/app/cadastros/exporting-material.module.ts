import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatOptionModule, MatSelectModule } from '@angular/material';
import { ToolboxModule } from '../global/toolbar/toolbar.module';

@NgModule({
  declarations: [],
  imports: [
    ToolboxModule
  ],
  exports: [
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatDatepickerModule,
    MatOptionModule,
    MatSelectModule,
    ToolboxModule
  ]
})
export class ExportingMaterialModule { }
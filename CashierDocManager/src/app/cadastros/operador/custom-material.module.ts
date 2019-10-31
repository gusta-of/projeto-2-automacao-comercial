import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule, MatToolbar } from '@angular/material/toolbar';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatOptionModule, MatSelectModule } from '@angular/material';
import { ToolboxModule } from 'src/app/global/toolbar/toolbar.module';

@NgModule({
  imports: [
    ToolboxModule,
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
    MatDatepickerModule,
    ToolboxModule
  ]
})
export class CustomMaterialModule {}

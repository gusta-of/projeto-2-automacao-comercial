import { NgModule, ModuleWithProviders } from '@angular/core';

import { SnackbarComponent } from './AnimationModule/snackbar/snackbar.component';
import { GridComponent } from './grid/grid.component';
import { ToolBoxComponent } from './toolbar/toolbar.component';
import { ImportsGlobalModule } from './imports-global.module';
import { NotificationService } from '../data-access/rest/notificationService/notification.service';

@NgModule({
  declarations: [ 
    SnackbarComponent,
    GridComponent,
    ToolBoxComponent
  ],
  imports: [
    ImportsGlobalModule
  ],
  exports: [
    SnackbarComponent,
    GridComponent,
    ToolBoxComponent
  ]
})
export class SharedModule { 
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ NotificationService ]
    }
  }
}

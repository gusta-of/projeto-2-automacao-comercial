import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

/** Imports do app */
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AppRoutingModule } from './app.routing.module';
import { AuthGuard } from './data-access/rest/GuardRouter/AuthGuard';
import { LoginModule } from './login/login.module';
import { SharedModule } from './global/shared.module';
import { NotificationService } from './data-access/rest/notificationService/notification.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    AppRoutingModule,
    HttpClientModule,
    LoginModule,
    SharedModule
  ],
  bootstrap: [AppComponent],
  providers: [
    AuthGuard,
    NotificationService
  ]
})
export class AppModule { }

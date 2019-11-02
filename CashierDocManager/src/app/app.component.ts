import { Component } from '@angular/core';
import { LoginService } from './data-access/rest/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  constructor(private loginService: LoginService) {}
  
  _sair()
  {
    this.loginService.logout();
  }
}

import { Component, OnInit, DebugNode } from '@angular/core';
import { LoginService } from './data-access/rest/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  mostrarMenu: boolean = false;

  ngOnInit(): void {
    if(DebugNode)
    {
      this.mostrarMenu = true; 
      return;
    }
    if(localStorage.getItem('currentUser') != null) {
      this.mostrarMenu = true;
    }
    else {
      this.loginService.mostraMenuEmitter.subscribe((mostrar: boolean) => this.mostrarMenu = mostrar);
    }
  }
 
  constructor(private loginService: LoginService) {}
  
  _sair()
  {
    this.mostrarMenu = false;
    this.loginService.logout();
  }
}

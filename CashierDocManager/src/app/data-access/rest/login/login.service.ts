
import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Operador } from '../../model/Index';
import { Router } from '@angular/router';

@Injectable({providedIn: 'root'})
export class LoginService {

    public token: string;
    private url = 'https://localhost:44334/api/operador/autenticacao';
    mostraMenuEmitter = new EventEmitter<boolean>();

    constructor(private _http: HttpClient, private router: Router) {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
      }
    
      /** Autentica Usuário */
      login(username: string, password: string): Observable<Operador> {
        
        return this._http.post<Operador>(this.url, { username: username, password: password })
          .pipe(
            map(operador => {
              /** Retorna login bem-sucedido se houver um token jwt na resposta */
              if (operador && operador['token']) {
                /**  armazenar detalhes do operador e token jwt no localStorage para 
                 * manter o operador logado entre as atualizações da página */
                localStorage.setItem('currentUser', JSON.stringify(operador));
              }
              if(localStorage.getItem('currentUser') != null){
                this.mostraMenuEmitter.emit(true);  
              }
              return operador;
            })
          );

         
      }
    
      /** Remove autenticação do usuário do localStorage */
      logout(): void {
        /** Limpa o token removendo o operador do local store para efetuar o logout */
        this.token = null;
        
        localStorage.removeItem('currentUser');
        this.router.navigate(["login"]);
      }
}
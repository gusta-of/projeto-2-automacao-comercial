import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OperadorService {
  private readonly _urlAutenticate = "https://localhost:44334/api/Controller/autenticacao";


  constructor() { }

  _autetnique(urlAutenticacao: String) : String {
    return "Token";
  }
}

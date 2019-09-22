import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VendasService {

  constructor() { }

  getVendas() {
    return [
      {id: 1, produto: 'Shampoo', valor: '$50,49'},
      {id: 2, produto: 'Condicionador', valor: '$45,49'}
    ];
  }
}

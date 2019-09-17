import { Component, OnInit } from '@angular/core';
import { ProdutoModel } from 'src/app/model/produto.model.component';

@Component({
  selector: 'grid-caixa-CDM',
  templateUrl: './grid-caixa.component.html',
  styleUrls: ['./grid-caixa.component.scss']
})
export class GridCaixaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.recebeValores();
  }

  lista : ProdutoModel []= [];


   recebeValores() {
    
    let produtoModel = new ProdutoModel;

    for (let index = 0; index < 200 ; index++) {

      produtoModel.produtoNome = 'DIPIRONA' + index;

      produtoModel.quantidade = 10 + 1;
  
      produtoModel.total= 100 + 1;

      this.lista.push(produtoModel);
  }  


  }

}

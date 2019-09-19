import { Component, OnInit } from '@angular/core';
import { ProdutoModel } from 'src/app/model/produto.model.component';

@Component({
  selector: 'grid-caixa-CDM',
  templateUrl: './grid-caixa.component.html',
  styleUrls: ['./grid-caixa.component.scss']
})
export class GridCaixaComponent implements OnInit {

  lista: ProdutoModel[] = [];

  constructor() { }

  ngOnInit() {
    this.recebeValores();
  }

  recebeValores() {
    for (let index = 0; index < 200; index++) {

      let produtoModel = new ProdutoModel;
      produtoModel.produtoNome = 'DIPIRONA ' + index;
      produtoModel.quantidade = 10 + index;
      produtoModel.total = 100 + index;

      this.lista.push(produtoModel);
    }


  }

}

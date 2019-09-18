import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ProdutoModel } from '../model/produto.model.component';

@Component({
  selector: 'menu-superior-CDM',
  templateUrl: './menu-superior.component.html',
  styleUrls: ['./menu-superior.component.scss']
})
export class MenuSuperiorComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {

  }

  exibeMenuLateral: boolean = true

  showMenuLateral = true;


  apresentarMenu() {
    this.exibeMenuLateral = !this.exibeMenuLateral;

    this.showMenuLateral = !this.showMenuLateral;

    if (!this.showMenuLateral) {

      var classList = this.document.getElementById('menuLateral').classList;

      classList.add('display-none')

    } else {

      this.document.getElementById('menuLateral').classList.remove('display-none');

    }
  }

}

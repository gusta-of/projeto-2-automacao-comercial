import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

import { VendasService } from '../caixa/vendas.service';

@Component({
  selector: 'cadastros-CDM',
  templateUrl: './cadastros.component.html',
  styleUrls: ['./cadastros.component.scss']
})
export class CadastrosComponent implements OnInit {

  produtos: any[];

  //Propriedade para receber headers da tabela
  @Input() colunas: string[];

  // Propriedade para receber valores que serão 
  // adicionados a coluna
  @Input() valores: any[][];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private vendaService: VendasService) { }

  ngOnInit() { }

  //Remove item da tabela
  _onDelete(valor: any){
     var index = this.valores.indexOf(valor)
     if(index !== -1){
       this.valores.splice(index, 1);
     }
  }

}

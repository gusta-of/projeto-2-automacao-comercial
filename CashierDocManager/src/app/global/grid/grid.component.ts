import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator } from '@angular/material';

@Component({
  selector: 'Grid-CDM',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  //Propriedade para receber headers da tabela
  @Input() colunas: string[] = [];

  // Propriedade para receber valores que serão 
  // adicionados a coluna
  @Input() valores: any[][] = [];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor() { }

  ngOnInit() { }

  //Remove item da tabela
  _onDelete(valor: any){
     var index = this.valores.indexOf(valor)
     if(index !== -1){
       this.valores.splice(index, 1);
     }
  }

}

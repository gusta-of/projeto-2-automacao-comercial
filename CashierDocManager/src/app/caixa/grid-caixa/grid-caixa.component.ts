import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'grid-caixa-CDM',
  templateUrl: './grid-caixa.component.html',
  styleUrls: ['./grid-caixa.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridCaixaComponent implements OnInit {

  /** Cria Array generico para os lançamentos*/
  @Input() lancamentos: any[] = [];

  /** Define as colunas da table */
  colunas: string[] = ['Produto', 'Valor'];

  /**Declara propriedade de paginação da data table */
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
  }

}

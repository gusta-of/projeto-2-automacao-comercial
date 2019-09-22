import { Component, OnInit, ViewChild } from '@angular/core';
import { ProdutoModel } from 'src/app/model/produto.model.component';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { VendasService } from '../vendas.service';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'grid-caixa-CDM',
  templateUrl: './grid-caixa.component.html',
  styleUrls: ['./grid-caixa.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridCaixaComponent implements OnInit {
  /** Cria Array generico */
  produtos: any[];

  /** Define as colunas da table */
  colunas: string[] = ['ID', 'Produto', 'Valor'];

   /** Propriedade data sorce da table, define o tipo e os elementos carregados */
   dataSource: any;
  
  /**Declara propriedade de paginação da data table */
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private vendaService: VendasService) { }

  ngOnInit() {
    this.produtos = this.vendaService.getVendas();
    this.dataSource = new MatTableDataSource<VendasService>(this.produtos);
    this.dataSource.paginator = this.paginator;
  }

}

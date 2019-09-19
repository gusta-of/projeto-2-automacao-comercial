import { Component, OnInit } from '@angular/core';
import { VendasService } from './vendas.service';

@Component({
  selector: 'caixa-CDM',
  templateUrl: './caixa.component.html',
  styleUrls: ['./caixa.component.scss']
})
export class CaixaComponent implements OnInit {

  constructor(private vendaService: VendasService) { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';

export interface FormaPagamento {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'input-caixa-CDM',
  templateUrl: './input-caixa.component.html',
  styleUrls: ['./input-caixa.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputCaixaComponent implements OnInit {
  selectedValue: string;

  formasPagamento: FormaPagamento[] = [
    {value: 'Cartao-0', viewValue: 'Cartão'},
    {value: 'Dinheiro-1', viewValue: 'Dinheiro'}
  ];

  constructor() { }

  ngOnInit() {}
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'input-caixa-CDM',
  templateUrl: './input-caixa.component.html',
  styleUrls: ['./input-caixa.component.scss']
})
export class InputCaixaComponent implements OnInit {

  constructor() { }

  text: string;

  pessoasResultado: string[];
  pessoas: string[];
  
  ngOnInit() {
    this.MontePessoas();
  }

  MontePessoas() {
    this.pessoas.push("João");
    this.pessoas.push("Raimundis");
  }

  search(event): void {
    this.pessoasResultado = this.pessoas.filter(c => c.startsWith(event.query));
  }



}

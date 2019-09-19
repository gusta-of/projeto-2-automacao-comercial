import { Component, OnInit } from '@angular/core';
import { PessoaModel } from 'src/app/model/pessoa.model.component';

@Component({
  selector: 'input-caixa-CDM',
  templateUrl: './input-caixa.component.html',
  styleUrls: ['./input-caixa.component.scss']
})
export class InputCaixaComponent implements OnInit {

  quantidade : number;
  text: string;
  pessoasResultado: string[];
  pessoas: string[];

  constructor() { }
  
  ngOnInit() {
    this.MontePessoas();
  }

  MontePessoas() {
    let pessoa1= new PessoaModel();
    pessoa1.nome = "João";
    pessoa1.cpf = "123456789";

    let pessoa = new PessoaModel();
    pessoa.nome = "Raimundis";
    pessoa.cpf = "987654321";

    this.pessoas.push(pessoa1.nome);
    this.pessoas.push(pessoa.nome);
  }

  search(event): void {
    this.pessoasResultado = [];
    this.pessoasResultado = this.pessoas.filter(c => c.startsWith(event.query));
  }

}

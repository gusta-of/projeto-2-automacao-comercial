import { Component, OnInit } from '@angular/core';
import { PessoaModel } from 'src/app/model/pessoa.model.component';

@Component({
  selector: 'input-caixa-CDM',
  templateUrl: './input-caixa.component.html',
  styleUrls: ['./input-caixa.component.scss']
})
export class InputCaixaComponent implements OnInit {

  constructor() { }

  text: string;

  pessoasResultado: PessoaModel[];
  pessoas: PessoaModel[] = [];
  
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

    this.pessoas.push(pessoa1);
    this.pessoas.push(pessoa);
  }

  search(event): void {
    this.pessoasResultado = [];
    this.pessoasResultado = this.pessoas.filter(c => c.nome.startsWith(event.query));
  }



}

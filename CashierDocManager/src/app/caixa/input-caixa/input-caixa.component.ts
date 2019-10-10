import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'input-caixa-CDM',
  templateUrl: './input-caixa.component.html',
  styleUrls: ['./input-caixa.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class InputCaixaComponent implements OnInit {

  /** Representa o formulário na template */
  _form: FormGroup;

  //Lnaçamentos obtidos do formulário para serem adicionados na grid
  lancamentos: any[] = [];

  //Moc de dados para teste
  formasPagamento: any[] = [
    { value: 'Cartao-0', viewValue: 'Cartão' },
    { value: 'Dinheiro-1', viewValue: 'Dinheiro' }
  ];

  constructor(fb: FormBuilder) {
    this._form = fb.group({
      cliente: [null, Validators.required],
      produto: [null, Validators.required],
      quantidade: [null, Validators.required],
      preco: [null, Validators.required],
      juros: [null],
      multa: [null],
      desconto: [null],
      formaPagamento: [null, Validators.required],
      numeroParcelas: [null],
      tipoLancamento: ['entrada', Validators.required]
    })
  }

  ngOnInit() { }

  //Fução para limpar relatório
  limpar(){
    this._form.reset();
  }

  //Função para salvar lançamento que irá ser adicionado na grid
  adicionar(){
    if(this._form.valid){
      this.lancamentos.push(this._form.value)
      console.log(this.lancamentos);
      this.limpar();
    }
  }
}

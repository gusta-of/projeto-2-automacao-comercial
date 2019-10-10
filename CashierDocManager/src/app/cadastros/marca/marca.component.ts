import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ɵangular_packages_forms_forms_d } from '@angular/forms';

@Component({
  selector: 'app-marca',
  templateUrl: './marca.component.html',
  styleUrls: ['./marca.component.scss']
})
export class MarcaComponent implements OnInit {

  _form: FormGroup;

  //Header da tabela de marca
  colunas: string[]= ['Descrição', '', ''];

  //Propriedade que irá atualizar os valores da tabela de marca
  valores: any[][] = [];

  constructor(_fb: FormBuilder) { 
    this._form = _fb.group({
      descricao: [null, Validators.required]
    })
  }

  ngOnInit() { }

  //Fução para adicionar valores a tabela
  onSubmit(){
    if(this._form.valid){
      let descricao = this._form.get('descricao');
      this.valores.push([descricao.value]);
      descricao.setValue('');
    }
  }

}

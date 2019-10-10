import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {

  marcas: any[] = [
    { value: 'marca1', viewValue: 'Marca 1' },
    { value: 'marca2', viewValue: 'Marca 2' },
    { value: 'marca3', viewValue: 'Marca 3' }
  ];

  unidades: any[] = [
    { value: 'lt', viewValue: 'Litros' },
    { value: 'ml', viewValue: 'Mililitro ' },
    { value: 'kg', viewValue: 'Quilograma' },
    { value: 'g', viewValue: 'Gramas' },
    { value: 'cx', viewValue: 'Caixa' }
  ]

  _form: FormGroup;

  constructor(fb: FormBuilder) {
    this._form = fb.group({
      identificador: [null, Validators.required],
      descricao: [null, Validators.required],
      marca: [null, Validators.required],
      unidadeMedida: [null, Validators.required],
      qtdeMinimaEstoque: [null, Validators.required]
    })
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this._form.valid) {
      console.log(this._form);
    }
  }

}

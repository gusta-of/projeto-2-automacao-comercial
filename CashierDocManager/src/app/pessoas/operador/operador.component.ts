import { Component, Output, EventEmitter, HostListener, Input, ViewChild } from '@angular/core';
import { FormGroup, ControlValueAccessor, FormBuilder, Validators, FormGroupDirective, Form } from '@angular/forms';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { Operador } from 'src/app/data-access/model/Index';


@Component({
  selector: 'app-operador',
  templateUrl: './operador.component.html',
  styleUrls: ['./operador.component.scss'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ],
})
export class OperadorComponent implements ControlValueAccessor {
  /** Representa o formulário na template */
  _form: FormGroup;

  /** Declaração do tipo de entidade que será emitida no evento */
  @Output()
  value: EventEmitter<Operador> = new EventEmitter<Operador>();

  /** Coleção que receberá os operadores já cadastrados do sistema */
  _operadores: Operador[] = [];

  /** Referências para as funções do ControlValueAccessor passadas pelo angular */
  private _onChange: (obj: Operador) => void;
  @HostListener('blur') _onTouched: () => void;
  //Propriedade para alterar estado do formalário se pode ser editado ou não.
  @Input() isReadOnly = false;
  @ViewChild(FormGroupDirective, { static: true }) formGroupDirective: FormGroupDirective;

  constructor(_fb: FormBuilder, private _adapter: DateAdapter<any>) {
    this._form = _fb.group({
      nome: [null, Validators.required],
      cpf: [null, Validators.required],
      nascimento: [null, Validators.required],
      idade: [null, Validators.required],
      email: [null]
    });

    // Observable
    this._form.valueChanges.subscribe((valor) => {
      if (this._onChange) {
        this._onChange(valor);
      }

      if (this._onTouched) {
        this._onTouched();
      }
    });
  }

  writeValue(obj: Operador): void {
    this._form.setValue(obj);
  }

  registerOnChange(fn: (obj: Operador) => void): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this._onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) {
      this._form.disable();
    } else {
      this._form.enable();
    }
  }

  /** Função que vai emitir os dados do formulário para fora */
  _emiteDadosDoFormulario() {
    if (this._form.invalid) {
      this._verificaFormularioValidoParaSubmeter(this._form);
      return;
    }

    const dados: Operador = { ...this._form.value };
    this.value.emit(dados);

    console.log(dados);
  }

  /** Método que verifica por recursão se os componentes estão válidos;
   *  Caso o controle seja do tipo formGroup ele chama a recursão para 
   *  validar os controles filhos dele!
   */
   _verificaFormularioValidoParaSubmeter(formGroup: FormGroup){
    Object.keys(formGroup.controls).forEach(campo => {
      console.log(campo);
      const controle = this._form.get(campo);
      controle.markAsDirty();
      
      if(controle instanceof FormGroup){
        this._verificaFormularioValidoParaSubmeter(controle);
      }
    });
  }

  /** Função para limpar a data */
  _limpaFormulario() {
    this.formGroupDirective.resetForm();
  }
}

import { Component, Output, EventEmitter, HostListener, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormGroup, ControlValueAccessor, FormBuilder, Validators } from '@angular/forms';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

/** 
 * Representa a entidade manipulada no formulário 
 * */
export interface UsuarioComponentData {
  id: number;
  nome: string;
  cpf: string;
  nascimento: Date;
  idade: number;
  email: string;
}

@Component({
  selector: 'app-operador',
  templateUrl: './operador.component.html',
  styleUrls: ['./operador.component.scss'],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OperadorComponent implements ControlValueAccessor {
  /** Representa o formulário na template */
  _form: FormGroup;

  /** Declaração do tipo de entidade que será emitida no evento */
  @Output()
  value: EventEmitter<UsuarioComponentData> = new EventEmitter<UsuarioComponentData>();


  /** Referências para as funções do ControlValueAccessor passadas pelo angular */
  private _onChange: (obj: UsuarioComponentData) => void;
  @HostListener('blur') _onTouched: () => void;
  //Propriedade para alterar estado do formalário se pode ser editado ou não.
  @Input() isReadOnly = false;

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

  writeValue(obj: UsuarioComponentData): void {
    this._form.setValue(obj);
  }

  registerOnChange(fn: (obj: UsuarioComponentData) => void): void {
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
    
    if(this._form.invalid) {
      return;
    }

    const dados: UsuarioComponentData = {...this._form.value};
    this.value.emit(dados);

    console.log(dados);
  }

  /** Função para limpar a data */
  clearData() {
    this._form.get('nascimento').setValue(null);
  }
}

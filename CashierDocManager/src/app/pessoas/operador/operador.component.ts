import { Component, Output, EventEmitter, HostListener, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormGroup, ControlValueAccessor, FormBuilder, Validators } from '@angular/forms';

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
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OperadorComponent implements ControlValueAccessor {

  //Propriedade para alterar estado do formalário se pode ser editado ou não.
  @Input() isReadOnly = false;

  /** Representa o formulário na template */
  _form: FormGroup;

  /** Declaração do tipo de entidade que será emitida no evento */
  @Output()
  value: EventEmitter<UsuarioComponentData> = new EventEmitter<UsuarioComponentData>();


  /** Referências para as funções do ControlValueAccessor passadas pelo angular */
  private _onChange: (obj: UsuarioComponentData) => void;
  @HostListener('focusout') 
  private _onTouched: () => void;

  constructor(_fb: FormBuilder) {
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
    this.isReadOnly = isDisabled;
  }

  /** Função que vai emitir os dados do formulário para fora */
  _emiteDadosDoFormulario() {
    
    if(this._form.invalid) {
      return;
    }

    const dados: UsuarioComponentData = {...this._form.value};
    this.value.emit(dados);
  }
}

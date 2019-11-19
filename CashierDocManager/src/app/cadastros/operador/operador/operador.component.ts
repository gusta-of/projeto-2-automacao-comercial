import { Component, Output, EventEmitter, HostListener, Input, ViewChild, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormGroup, ControlValueAccessor, FormBuilder, Validators, FormGroupDirective, ValidatorFn, ValidationErrors } from '@angular/forms';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

import { Operador } from 'src/app/data-access/model/Index';
import { NotificationService } from '../../../data-access/rest/notificationService/notification.service';
import { ResponseEmitterService } from 'src/app/data-access/rest/response-emitter.service';


@Component({
  selector: 'app-operador',
  templateUrl: './operador.component.html',
  styleUrls: ['./operador.component.scss'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OperadorComponent implements ControlValueAccessor, OnInit {

  _EhCadastroOuEdicao: boolean = false;

  //Header da tabela de marca
  colunas: string[]= ['Nome', 'Email', '', ''];

  //Propriedade que irá atualizar os valores da tabela de marca
  valores: any[][] = [];

  /** Representa o formulário na template */
  _form: FormGroup;

  /** Declaração do tipo de entidade que será emitida no evento */
  @Output()
  value: EventEmitter<Operador> = new EventEmitter<Operador>();

  /** Expressão regular para validar e-mail */
  emailPattern = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+/i;

  /** Expressão regular para validar campo que aceita cpf ou cnpj */
  cpfcnpjPattern = /^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2})$/;

  /** Coleção que receberá os operadores já cadastrados do sistema */
  _operadores: Operador[] = [];

  /** Referências para as funções do ControlValueAccessor passadas pelo angular */
  private _onChange: (obj: Operador) => void;
  @HostListener('blur') _onTouched: () => void;
  //Propriedade para alterar estado do formalário se pode ser editado ou não.
  @Input() isReadOnly = false;
  @ViewChild(FormGroupDirective, { static: true }) formGroupDirective: FormGroupDirective;


  constructor(_fb: FormBuilder, 
              private _notificationService: NotificationService, 
              private _responseEmitter: ResponseEmitterService) {
    this._form = _fb.group({
      nome: ['', [Validators.required, Validators.minLength(2)]],
      cpf: ['', [Validators.required, Validators.pattern(this.cpfcnpjPattern)]],
      nascimento: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      confirmEmail: ['', [Validators.required, Validators.pattern(this.emailPattern)]]
    }, { validators: this.equalsTo })

    // Observable
    this._form.valueChanges.subscribe((valor) => {
      if (this._onChange) {
        this._onChange(valor);
      }

      if (this._onTouched) {
        this._onTouched();
      }
    })
  }

  ngOnInit(): void {}

  //Valida se e-mails estão válidos(iguais)
  equalsTo: ValidatorFn = (control: FormGroup): ValidationErrors | undefined => {
    const email = control.get('email');
    const emailConfirm = control.get('confirmEmail');

    if (email.invalid || emailConfirm.invalid) {
      return undefined;
    }

    if (email.value !== emailConfirm.value) {
      return { emailNotMatch: true }
    }

    return undefined;
  };

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
  _emiteDadosDoFormulario(): boolean {
    if (this._form.invalid) {
      this._verificaFormularioValidoParaSubmeter(this._form);
      this._notificationService.notify("Campo(s) Invalido(s), Verifique se preencheu o formulário corretamente!")
      return false;
    }

    const dados: Operador = { ...this._form.value };
    this.value.emit(dados);
    console.log(dados);
    return true;
  }

  /** Método que verifica por recursão se os componentes estão válidos;
   *  Caso o controle seja do tipo formGroup ele chama a recursão para 
   *  validar os controles filhos dele!
   */
  _verificaFormularioValidoParaSubmeter(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(campo => {
      console.log(campo);
      const controle = this._form.get(campo);
      controle.markAsDirty();

      if (controle instanceof FormGroup) {
        this._verificaFormularioValidoParaSubmeter(controle);
      }
    });
  }

  /** Função para limpar a data */
  _limpaFormulario() {
    this.formGroupDirective.resetForm();
  }

  reciverFeedback(respostaFilho) {
    console.log(respostaFilho)
    const jsonResposta = JSON.parse(respostaFilho);

    if (jsonResposta.funcao == "salvar") {

      if(this._emiteDadosDoFormulario())
      {
        this._EhCadastroOuEdicao = !this._EhCadastroOuEdicao;
        /** Aqui faremos a requisição e salvar o operador */
      }

      this._responseEmitter.notify(this._form.invalid);
    }

    if (jsonResposta.funcao == "novo") {
      this._EhCadastroOuEdicao = !this._EhCadastroOuEdicao;
      /** Aqui chamaremos o card para cadastro */
    }
  }

  _respondaFilho() : boolean {
    return this._form.invalid;
  }

}

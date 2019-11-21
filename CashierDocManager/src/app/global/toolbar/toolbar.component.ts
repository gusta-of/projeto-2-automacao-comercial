import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ResponseEmitterService } from '../../data-access/rest/response-emitter.service';

@Component({
  selector: 'app-toolbar-CDM',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolBoxComponent implements OnInit {

  @Output() evento = new EventEmitter();
  estaValido: boolean = true;

  novo = 'Novo';

  constructor(private _responseEmitter: ResponseEmitterService) { }

  ngOnInit() {
    this._responseEmitter.notifier.subscribe(value => {
      this._respostaPai(value);
    });
  }

  handleButtonClickNovo(value) {
    debugger

    if (this.estaValido) {
      this.evento.emit('{"funcao": "novo"}');
      this.novo = "Confirmar";
      this.estaValido = !this.estaValido;
    } else {
      this.evento.emit('{"funcao": "salvar"}');

    }

  }



  handleButtonClickLimpar(value) {
    this.evento.emit('{"funcao": "limpar"}');
    this.estaValido = true;
  }

  _respostaPai(resposta) {
    debugger
    if (resposta) {
      this.estaValido = !this.estaValido;
      this.novo = "Novo";
    }
  }
}

import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ResponseEmitterService } from '../../data-access/rest/response-emitter.service';

@Component({
  selector: 'app-toolbar-CDM',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolBoxComponent implements OnInit {

  @Output() evento = new EventEmitter();
  ehNovo: boolean;

  constructor(private _responseEmitter: ResponseEmitterService) { }

  ngOnInit() {
    this._responseEmitter.notifier.subscribe(value =>
      this._respostaPai(value)
    );
  }


  handleButtonClickNovo(value) {
    if (!this.ehNovo) {
      this.ehNovo = value;
      this.evento.emit('{"funcao": "novo"}');
    }
    else {
      this.ehNovo = !value;
      this.evento.emit('{"funcao": "salvar"}');
    }
  }

  handleButtonClickLimpar(value) {
    this.evento.emit('{"funcao": "limpar"}');
    this.ehNovo = true;
  }

  _respostaPai(resposta) {
    if(resposta == true){
      this.ehNovo = !this.ehNovo;
    }
  }
}

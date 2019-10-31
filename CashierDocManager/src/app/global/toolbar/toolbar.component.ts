import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar-CDM',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolboxComponent implements OnInit {

  @Output()
  evento: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  _emiteFuncaoSalvar()
  {
    const funcao = '[{ "funcao": "salvar" }]';
    this.evento.emit(funcao);
  }
}

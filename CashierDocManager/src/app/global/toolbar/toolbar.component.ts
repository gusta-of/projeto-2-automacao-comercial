import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar-CDM',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolboxComponent implements OnInit {

  @Output() evento = new EventEmitter();
  ehNovo: boolean = false;

  constructor() { }

  ngOnInit() {}


  handleButtonClickNovo(value) {
    if(!this.ehNovo){
      this.ehNovo = value; 
      this.evento.emit({'funcao': 'novo'});
    }
    else{
      this.ehNovo = !value;
      this.evento.emit({'funcao': 'Edicao'});
    }
  }

  handleButtonClickLimpar(value){
    this.evento.emit({'funcao': 'Limpar'});
    this.ehNovo = true;
  }
}

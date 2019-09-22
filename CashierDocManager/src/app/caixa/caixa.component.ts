import { Component, OnInit, ViewChild } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'caixa-CDM',
  templateUrl: './caixa.component.html',
  styleUrls: ['./caixa.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CaixaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}


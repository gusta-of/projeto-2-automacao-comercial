import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'caixa-menu-CDM',
  templateUrl: './caixa-menu.component.html',
  styleUrls: ['./caixa-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CaixaMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

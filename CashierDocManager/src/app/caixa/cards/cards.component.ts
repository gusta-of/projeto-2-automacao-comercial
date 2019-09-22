import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cards-CDM',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

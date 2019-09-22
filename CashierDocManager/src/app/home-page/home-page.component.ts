import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'home-page-CDM',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaixaMenuComponent } from './caixa-menu.component';

describe('CaixaMenuEsquerdoComponent', () => {
  let component: CaixaMenuComponent;
  let fixture: ComponentFixture<CaixaMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaixaMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaixaMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

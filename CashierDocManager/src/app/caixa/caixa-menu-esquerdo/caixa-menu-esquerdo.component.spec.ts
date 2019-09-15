import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaixaMenuEsquerdoComponent } from './caixa-menu-esquerdo.component';

describe('CaixaMenuEsquerdoComponent', () => {
  let component: CaixaMenuEsquerdoComponent;
  let fixture: ComponentFixture<CaixaMenuEsquerdoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaixaMenuEsquerdoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaixaMenuEsquerdoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

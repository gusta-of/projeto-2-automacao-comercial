import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCaixaComponent } from './input-caixa.component';

describe('InputCaixaComponent', () => {
  let component: InputCaixaComponent;
  let fixture: ComponentFixture<InputCaixaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputCaixaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputCaixaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

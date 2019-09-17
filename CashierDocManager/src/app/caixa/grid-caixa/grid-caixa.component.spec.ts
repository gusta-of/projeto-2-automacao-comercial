import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridCaixaComponent } from './grid-caixa.component';

describe('GridCaixaComponent', () => {
  let component: GridCaixaComponent;
  let fixture: ComponentFixture<GridCaixaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridCaixaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridCaixaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EfetivoListaComponent } from './efetivo-lista.component';

describe('EfetivoListaComponent', () => {
  let component: EfetivoListaComponent;
  let fixture: ComponentFixture<EfetivoListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EfetivoListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EfetivoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

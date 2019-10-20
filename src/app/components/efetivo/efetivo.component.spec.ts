import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EfetivoComponent } from './efetivo.component';

describe('EfetivoComponent', () => {
  let component: EfetivoComponent;
  let fixture: ComponentFixture<EfetivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EfetivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EfetivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bloque2Component } from './bloque2.component';

describe('Bloque2Component', () => {
  let component: Bloque2Component;
  let fixture: ComponentFixture<Bloque2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bloque2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bloque2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

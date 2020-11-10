import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bloque1Component } from './bloque1.component';

describe('Bloque1Component', () => {
  let component: Bloque1Component;
  let fixture: ComponentFixture<Bloque1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bloque1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bloque1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

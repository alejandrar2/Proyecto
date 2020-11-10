import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterPlantillaComponent } from './footer-plantilla.component';

describe('FooterPlantillaComponent', () => {
  let component: FooterPlantillaComponent;
  let fixture: ComponentFixture<FooterPlantillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterPlantillaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterPlantillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

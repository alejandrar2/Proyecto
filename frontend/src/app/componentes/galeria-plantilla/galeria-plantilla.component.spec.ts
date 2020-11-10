import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaPlantillaComponent } from './galeria-plantilla.component';

describe('GaleriaPlantillaComponent', () => {
  let component: GaleriaPlantillaComponent;
  let fixture: ComponentFixture<GaleriaPlantillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaleriaPlantillaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GaleriaPlantillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

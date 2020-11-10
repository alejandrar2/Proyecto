import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosPlantillaComponent } from './productos-plantilla.component';

describe('ProductosPlantillaComponent', () => {
  let component: ProductosPlantillaComponent;
  let fixture: ComponentFixture<ProductosPlantillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosPlantillaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosPlantillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

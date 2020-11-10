import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPlantillaComponent } from './header-plantilla.component';

describe('HeaderPlantillaComponent', () => {
  let component: HeaderPlantillaComponent;
  let fixture: ComponentFixture<HeaderPlantillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderPlantillaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderPlantillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

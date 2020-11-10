import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarPlantillaComponent } from './navbar-plantilla.component';

describe('NavbarPlantillaComponent', () => {
  let component: NavbarPlantillaComponent;
  let fixture: ComponentFixture<NavbarPlantillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarPlantillaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarPlantillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

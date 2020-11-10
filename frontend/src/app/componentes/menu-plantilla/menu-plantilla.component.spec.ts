import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPlantillaComponent } from './menu-plantilla.component';

describe('MenuPlantillaComponent', () => {
  let component: MenuPlantillaComponent;
  let fixture: ComponentFixture<MenuPlantillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuPlantillaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPlantillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

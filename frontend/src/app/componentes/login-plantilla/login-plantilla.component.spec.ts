import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPlantillaComponent } from './login-plantilla.component';

describe('LoginPlantillaComponent', () => {
  let component: LoginPlantillaComponent;
  let fixture: ComponentFixture<LoginPlantillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginPlantillaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPlantillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

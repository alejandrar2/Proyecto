import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitiiosComponent } from './sitiios.component';

describe('SitiiosComponent', () => {
  let component: SitiiosComponent;
  let fixture: ComponentFixture<SitiiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitiiosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitiiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

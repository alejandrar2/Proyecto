import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanySecondComponent } from './company-second.component';

describe('CompanySecondComponent', () => {
  let component: CompanySecondComponent;
  let fixture: ComponentFixture<CompanySecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanySecondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanySecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

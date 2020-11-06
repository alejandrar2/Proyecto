import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideboardClienteComponent } from './sideboard-cliente.component';

describe('SideboardClienteComponent', () => {
  let component: SideboardClienteComponent;
  let fixture: ComponentFixture<SideboardClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideboardClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideboardClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

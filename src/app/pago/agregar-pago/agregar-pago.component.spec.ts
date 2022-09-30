import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarPagoComponent } from './agregar-pago.component';

describe('AgregarPagoComponent', () => {
  let component: AgregarPagoComponent;
  let fixture: ComponentFixture<AgregarPagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarPagoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

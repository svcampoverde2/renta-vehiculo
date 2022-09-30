import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaVehiculoComponent } from './lista-vehiculo.component';

describe('ListaVehiculoComponent', () => {
  let component: ListaVehiculoComponent;
  let fixture: ComponentFixture<ListaVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaVehiculoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

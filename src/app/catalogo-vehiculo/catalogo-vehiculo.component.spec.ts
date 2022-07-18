import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoVehiculoComponent } from './catalogo-vehiculo.component';

describe('CatalogoVehiculoComponent', () => {
  let component: CatalogoVehiculoComponent;
  let fixture: ComponentFixture<CatalogoVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogoVehiculoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogoVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

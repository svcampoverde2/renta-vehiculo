import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { InformacionComponent } from './informacion/informacion.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CatalogoVehiculoComponent } from './catalogo-vehiculo/catalogo-vehiculo.component';
//import { ListaVehiculoComponent } from './lista-vehiculo/lista-vehiculo.component';

@NgModule({
  declarations: [
  // CatalogoVehiculoComponent, 
 // InformacionComponent,
 // ListaVehiculoComponent
  ],
  imports: [
    CommonModule, MatDialogModule
  ]
})
export class VehiculoModule { }

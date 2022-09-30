import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InformacionComponent } from '../informacion/informacion.component';

@Component({
  selector: 'app-catalogo-vehiculo',
  templateUrl: './catalogo-vehiculo.component.html',
  styleUrls: ['./catalogo-vehiculo.component.css']
})
export class CatalogoVehiculoComponent implements OnInit {
  detalles !:any;
// id !: any
  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }
 Info(){
   this.dialog.open(InformacionComponent);
 }
 open(){
  this.detalles = "Informacion";
  this.dialog.open(InformacionComponent);
 }
}

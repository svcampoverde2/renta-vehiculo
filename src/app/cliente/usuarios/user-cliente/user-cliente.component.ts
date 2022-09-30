import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AgregarPagoComponent } from 'src/app/pago/agregar-pago/agregar-pago.component';

@Component({
  selector: 'app-user-cliente',
  templateUrl: './user-cliente.component.html',
  styleUrls: ['./user-cliente.component.css']
})
export class UserClienteComponent implements OnInit {

  constructor(private dialog:MatDialog) {}

 Agregar(){
   this.dialog.open(AgregarPagoComponent,{
      width:'400px'
   })
 }
  ngOnInit(): void { }

}

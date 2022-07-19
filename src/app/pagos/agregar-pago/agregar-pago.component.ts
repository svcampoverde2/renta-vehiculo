import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';
import {Pago} from '../pago'

@Component({
  selector: 'app-agregar-pago',
  templateUrl: './agregar-pago.component.html',
  styleUrls: ['./agregar-pago.component.css']
})
export class AgregarPagoComponent implements OnInit {

  constructor(private router: Router, private dialogRef: MatDialogRef<AgregarPagoComponent>, 
    @ Inject(MAT_DIALOG_DATA) public data: Pago) { }

  ngOnInit(): void {
  }
  usuarioNuevo = new FormGroup({
    cedula: new FormControl('',Validators.required),
    nombres: new FormControl('',Validators.required),
    apellidos: new FormControl('', Validators.required),
    auto: new FormControl('', Validators.required),
    costo: new FormControl('',Validators.required),
  })

  redirectTo(uri:string, objToSend:NavigationExtras){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri],{ state: { datosCliente: objToSend}}));
  }
  
  pagar()
  {
    alert("SU PAGO A SIDO REALIZADO CON EXITO!!!")
    this.dialogRef.close(); 
  }

}

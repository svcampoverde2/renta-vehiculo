import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';
import { ApiService } from 'src/app/cliente/api.service';
import {Pago} from '../pago'

@Component({
  selector: 'app-agregar-pago',
  templateUrl: './agregar-pago.component.html',
  styleUrls: ['./agregar-pago.component.css']
})
export class AgregarPagoComponent implements OnInit {

  constructor(private router: Router, private dialogRef: MatDialogRef<AgregarPagoComponent>, 
    @ Inject(MAT_DIALOG_DATA) public data: Pago, private op:ApiService) { }

  ngOnInit(): void {
  }
  usuarioNuevo = new FormGroup({
    cedula: new FormControl('',Validators.required),
    nombres: new FormControl('',Validators.required),
    apellidos: new FormControl('', Validators.required),
    marca: new FormControl('', Validators.required),
    cantidad: new FormControl('', Validators.required),
    costo: new FormControl('',Validators.required),
  })

  redirectTo(uri:string, objToSend:NavigationExtras){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri],{ state: { datosCliente: objToSend}}));
  }
  
  Reservar()
  {
        this.op.postReserva(this.usuarioNuevo.value).subscribe({next:(res) =>{
          alert("Error, la reserva no se guardado");
          
          this.dialogRef.close();
      },
       error:(res) => {
        alert("Reserva guardada con exito");
        this.usuarioNuevo.reset();
        this.router.navigate(['/pago'])
        this.dialogRef.close();}
       })
    
  }

}

import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/cliente/api.service';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
import {LoginComponent} from '../../login/login.component';
import { ClienteService } from 'src/app/usuarios/cliente.service';

@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.css']
})
export class AgregarClienteComponent implements OnInit {
  rol!:any;
  usuarioNuevo !: FormGroup
  actionBtn: string ="Guardar"
  constructor(private formBuilder: FormBuilder, private api:ApiService, 
    @Inject(MAT_DIALOG_DATA) public editData:any, private user:ClienteService,
    private dialogRef: MatDialogRef<AgregarClienteComponent>, private router:Router) { }

  ngOnInit(): void {
    this.usuarioNuevo = this.formBuilder.group({
      cedula:['', Validators.required],
      nombres:['', Validators.required],
      apellidos:['', Validators.required],
      correo:['', Validators.required],
      direccion:['', Validators.required],
      edad:['', Validators.required]
    });
    if(this.editData){
      this.actionBtn ="Modificar";
      this.usuarioNuevo.controls['cedula'].setValue(this.editData.cedula);
      this.usuarioNuevo.controls['nombres'].setValue(this.editData.nombres);
      this.usuarioNuevo.controls['apellidos'].setValue(this.editData.apellidos);
      this.usuarioNuevo.controls['correo'].setValue(this.editData.correo);
      this.usuarioNuevo.controls['direccion'].setValue(this.editData.direccion);
      this.usuarioNuevo.controls['edad'].setValue(this.editData.edad);
    }
    this.user.userN.subscribe((dato) => { this.rol = '' + dato; });
  }
 agregar(){
 if(!this.editData){
  if(this.usuarioNuevo.valid){
    this.api.postCliente(this.usuarioNuevo.value)
    .subscribe({
      next:(res)=>{
        alert("Registro guardado con exito");
        if(this.get_dato('Admin')==true){
          this.router.navigate(['clientes']);
      }
      if(!this.get_dato('Admin')){       
        this.router.navigate(['userCliente']);
      }
      this.usuarioNuevo.reset();
      this.dialogRef.close('Guardar');
      },
      error:(res)=>{("Error, el registro no se guardado")}
    })
  }
 }else{
  this.modificarClient()
 }
 }
 modificarClient(){
   this.api.putClient(this.usuarioNuevo.value, this.editData.id)
   .subscribe({
     next:(res)=>{
       alert("Datos modificados con exito");
       this.usuarioNuevo.reset();
       this.dialogRef.close('update');
     },
     error:()=>{
       alert("No se pudo realizar los cambios");
     }
   })
 }
 get_dato(key: string) {
  try {
    return localStorage.getItem(key);
  } catch (e) {
    return e;
  }
}

}

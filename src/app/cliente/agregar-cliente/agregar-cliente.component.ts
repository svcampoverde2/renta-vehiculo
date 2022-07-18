import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/cliente/api.service';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'

@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.css']
})
export class AgregarClienteComponent implements OnInit {

  usuarioNuevo !: FormGroup
  actionBtn: string ="Guardar"
  constructor(private formBuilder: FormBuilder, private api:ApiService, 
    @Inject(MAT_DIALOG_DATA) public editData:any,
    private dialogRef: MatDialogRef<AgregarClienteComponent>) { }

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
  }
 agregar(){
 if(!this.editData){
  if(this.usuarioNuevo.valid){
    this.api.postCliente(this.usuarioNuevo.value)
    .subscribe({
      next:(res)=>{
        alert("Registro guardado con exito");
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

}

import { Component, Inject, Input, OnInit } from '@angular/core';
import { CheckboxRequiredValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/cliente/api.service';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ClienteService } from '../../cliente.service';
import { MatColumnDef, MatTableDataSource } from '@angular/material/table';
import { Ncliente } from 'src/app/interfaces/ncliente';
import { DataSource, SelectionChange } from '@angular/cdk/collections';
import { MatInput, MatInputModule } from '@angular/material/input';
import { ciudades } from 'src/app/interfaces/ciudad';
import { getMatIconFailedToSanitizeUrlError } from '@angular/material/icon';
@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.css']
})
export class AgregarClienteComponent implements OnInit {

  id: number | undefined;
  usuarioNuevo !: FormGroup;
  rol!:any;
  //usuarioNuevo !: FormGroup
  actionBtn: string ="Guardar"
  constructor(private formBuilder: FormBuilder, private api:ApiService,
    @Inject(MAT_DIALOG_DATA) public editData:any, private user:ClienteService,
    private dialogRef: MatDialogRef<AgregarClienteComponent>, private router:Router) { 
    }
      ngOnInit(): void {
    this. usuarioNuevo = this.formBuilder.group({
      cedula:['', Validators.required],
      nombres:['', Validators.required],
      apellidos:['', Validators.required],
      correo:['', Validators.required],
      password:['', Validators.required],
      direccion:['', Validators.required],
      ciudad:['', Validators.required],
      edad:['', Validators.required]
    });
    if(this.editData){
      this.actionBtn ="Modificar";
      this.usuarioNuevo.controls['cedula'].setValue(this.editData.cedula);
      this.usuarioNuevo.controls['nombres'].setValue(this.editData.nombres);
      this.usuarioNuevo.controls['apellidos'].setValue(this.editData.apellidos);
      this.usuarioNuevo.controls['correo'].setValue(this.editData.correo);
      this.usuarioNuevo.controls['password'].setValue(this.editData.password);
      this.usuarioNuevo.controls['direccion'].setValue(this.editData.direccion);
      this.usuarioNuevo.controls['ciudad'].setValue(this.editData.ciudad);
      this.usuarioNuevo.controls['edad'].setValue(this.editData.edad);
    }
  
    
    this.user.userN.subscribe((dato) => { this.rol = '' + dato; });
  
  }
 

 agregar(){
 if(!this.editData){
  if(this.usuarioNuevo.valid){
    this.api.postCliente(this.usuarioNuevo.value)
    .subscribe((data) =>{
      alert("Error, el registro no se guardado");
      this.usuarioNuevo.reset();
    
       /* if(!this.get_dato("user")){
          this.rol="usuario";
          this.router.navigate(['userCliente']);
        }
        else{ this.router.navigate(['clientes']);}*/
      },
     error=>{alert("Registro guardado con exito");
     this.dialogRef.close('Guardar')
    })
  }
 }else{
  this.modificarClient()
 }
 }
 modificarClient(){
   this.api.putCliente(this.usuarioNuevo.value, this.editData.id)
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
ngDoCheck(): void {
  this.rol=this.get_dato("user");
  console.log(this.rol);
}


}

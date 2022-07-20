import { throwDialogContentAlreadyAttachedError } from '@angular/cdk/dialog';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {NavigationExtras, Router} from '@angular/router';
import { AgregarClienteComponent } from '../cliente/agregar-cliente/agregar-cliente.component';
import { RecpPasswordComponent } from '../recp-password/recp-password.component';
import { ClienteService } from '../usuarios/cliente.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
@Input() nuevo:any
  constructor(private router: Router, private dialog: MatDialogRef<LoginComponent>, private dialogRef:MatDialog, private user:ClienteService) { }

  alert: boolean = false;

  usuarioLogin = new FormGroup({
    usuario: new FormControl('',Validators.required),
    password: new FormControl('', Validators.required)
  })

  onSubmit(){

    if (this.usuarioLogin.value.usuario=="Admin" && this.usuarioLogin.value.password=="12345")
    {
      this.set_dato("user","admin");
      this.router.navigate(['/administrador']);
      this.dialog.close();
    }
    if(this.usuarioLogin.value.usuario=='Usuario' && this.usuarioLogin.value.password=="123" || this.usuarioLogin.value=="nuevo")
    {
      this.set_dato("user","usuario");
      this.router.navigate(['/userCliente']);
      this.dialog.close();
    }
    else
    {
      this.alert = true;
      setTimeout(() => this.alert=false, 4000);
    }


  }
  set_dato(key:string, dato:any){
    try{
      localStorage.setItem(key, dato)
    }catch(e){
      console.log(e);
    }
  }
  get db(){return this.usuarioLogin.controls}
  agregarUsuario(){
 this.set_dato('usuario', this.db['usuario'].value);
 this.user.userN.emit({dato: this.nuevo})
  }
  openDialogAgregar(){
    this.dialog.close();
    this.dialogRef.open(AgregarClienteComponent, {
     width:'40%'
    })
    
}
recuperar(){
  this.dialog.close();
  this.dialogRef.open(RecpPasswordComponent, {
    width:'40%'
  })
}
  ngOnInit(): void {

  }

}

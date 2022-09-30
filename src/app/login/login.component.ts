import { throwDialogContentAlreadyAttachedError } from '@angular/cdk/dialog';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {NavigationExtras, Router} from '@angular/router';
import { AgregarClienteComponent } from '../cliente/agregar-cliente/agregar-cliente.component';
import { RecpPasswordComponent } from '../login/recp-password/recp-password.component';
import { ClienteService } from '../cliente.service';
import { ApiService } from '../cliente/api.service';
import { Ncliente } from '../interfaces/ncliente';
import { Usuario } from '../interfaces/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
@Input() nuevo:any
  constructor(private aut:ApiService, private router: Router, private dialog: MatDialogRef<LoginComponent>, private dialogRef:MatDialog, private user:ClienteService) { }

  alert: boolean = false;
  usuarioTemp:any;
  passwordTem:any;
  //rol !:any;
  usuarioLogin = new FormGroup({
    correo: new FormControl('',Validators.required),
    password: new FormControl('', Validators.required)
  })
 
  onSubmit(){

    this.usuarioTemp = this.usuarioLogin.value.correo;
    this.passwordTem = this.usuarioLogin.value.password;
    
    if(this.usuarioTemp =true){
    
      this.aut.login(this.usuarioLogin.value as Usuario).subscribe((data:any) =>{
        this.set_dato("user","admin");
      localStorage.setItem('userName', this.usuarioTemp);
      localStorage.setItem('token_value', data);
      localStorage.setItem('userRol', data);
      this.router.navigate(['/']);
     // this.router.navigate(['/administrador']);      
      this.dialog.close(); 
    },
    (errorData) =>alert(errorData.error+"No autorizado..."));
    }
   /* if(this.usuarioLogin.value.correo !="correo" && this.usuarioLogin.value.password !="password"){
      this.alert = true;
      setTimeout(() => this.alert=false, 4000);
    }*/
    if(this.usuarioTemp =true ){
      
      this.aut.login(this.usuarioLogin.value as Usuario).subscribe((data:any) =>{
        this.set_dato("user","usuario");
      localStorage.setItem('userName', this.usuarioTemp);
      localStorage.setItem('token_value', data);
      localStorage.setItem('userRol', data);
      this.router.navigate(['/']);     
      //this.router.navigate(['/userCliente']);      
      this.dialog.close(); 
    },
    (errorData) =>alert(errorData.error+"No autorizado...")); 
  } /*if(this.usuarioLogin.value.correo !="correo" && this.usuarioLogin.value.password !="password"){ 
    this.alert = true;
    setTimeout(() => this.alert=false, 4000);
  }*/


 /* usuarioLogin = new FormGroup({
    usuario: new FormControl('',Validators.required),
    password: new FormControl('', Validators.required)
  })*/
////login
/*if (this.usuarioLogin.value.correo=="Admin" && this.usuarioLogin.value.password=="12345")
    {
      this.set_dato("user","admin");
      this.router.navigate(['/administrador']);
      this.dialog.close();
    }
    if(this.usuarioLogin.value.correo=='Usuario' && this.usuarioLogin.value.password=="123")
    {
      this.set_dato("user","usuario");
      this.router.navigate(['/userCliente']);
      this.dialog.close();
    }
    
    else
    {
      this.alert = true;
      setTimeout(() => this.alert=false, 4000);
    }*/
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
 this.set_dato('correo', this.db['correo'].value);
 this.user.userN.emit({dato: this.nuevo})
  }
  openDialogAgregar(){
    this.dialog.close();
    this.dialogRef.open(AgregarClienteComponent, {
     width:'400px'
    })
    
}
recuperar(){
  this.dialog.close();
  this.dialogRef.open(RecpPasswordComponent, {
    width:'400px'
  })
}
  ngOnInit(): void {

  }

}

/* usuarioLogin = new FormGroup({
    usuario: new FormControl('',Validators.required),
    password: new FormControl('', Validators.required)
  })*/

/*if (this.usuarioLogin.value.usuario=="Admin" && this.usuarioLogin.value.password=="12345")
    {
      this.set_dato("user","admin");
      this.router.navigate(['/administrador']);
      this.dialog.close();
    }
    if(this.usuarioLogin.value.usuario=='Usuario' && this.usuarioLogin.value.password=="123")
    {
      this.set_dato("user","usuario");
      this.router.navigate(['/userCliente']);
      this.dialog.close();
    }
    
    else
    {
      this.alert = true;
      setTimeout(() => this.alert=false, 4000);
    }*/
   
import { throwDialogContentAlreadyAttachedError } from '@angular/cdk/dialog';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import {NavigationExtras, Router} from '@angular/router';
import { ClienteService } from '../usuarios/cliente.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
@Input() nuevo:any
  constructor(private router: Router, private dialogRef: MatDialogRef<LoginComponent>, private user:ClienteService) { }

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
      this.dialogRef.close();
    }
    if(this.usuarioLogin.value.usuario=='Usuario' && this.usuarioLogin.value.password=="123")
    {
      this.set_dato("user","usuario");
      this.router.navigate(['/userCliente']);
      this.dialogRef.close();
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

  ngOnInit(): void {

  }

}

import { Component, DoCheck, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,DoCheck {
  rol!:any;
  constructor(private dialog: MatDialog, private router: Router, private local: Location,
    private user: ClienteService) {

  }
  
    ngDoCheck(): void {
        this.rol=this.get_dato("user");
        console.log(this.rol);
    }
   

  openDialogSesion() {
    this.dialog.open(LoginComponent);
  }
  get_dato(key: string) {
    try {
      return localStorage.getItem(key);
    } catch (e) {
      return e;
    }
  }
  get isLoggedIn(): boolean{
    return this.user.isLoggedIn;
  }
  cliente() {
    this.router.navigate(['/clientes']);
    
  }
  catalogo(){
    this.router.navigate(['catalogo'])
  }
  pagos(){
    this.router.navigate(['/pago'])
  }
  listaVehiculo(){
    this.router.navigate(['/listavehiculo'])
  }
  historial(){
    this.router.navigate(['/historial'])
  }
  return(){
  if(this.rol=='admin'){
    this.router.navigate(['/administrador']);
  }
  if(this.rol=='usuario'){
    this.router.navigate(['/userCliente']);
  }
  if(this.rol!='admin' && this.rol !='usuario'){
    this.router.navigate(['/pageInicial']);
  }

  }
  ngOnInit(): void {
    this.user.userN.subscribe((dato) => { this.rol = '' + dato; });
  }
  cerrarSesion() {
    this.router.navigate(['/pageInicial']);
    localStorage.clear();
  }

}

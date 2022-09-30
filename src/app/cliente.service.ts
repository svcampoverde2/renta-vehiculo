import { EventEmitter, Injectable, Output } from '@angular/core';
import { Usuario } from './interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
@Output() userN:EventEmitter<any> = new EventEmitter();
@Output() id:EventEmitter<any> = new EventEmitter();
  private _correo = 'email'; 
  private _password = '12345';

  public isLoggedIn: boolean = true;

  public mockUser: Usuario = {
    name: 'nombre',
    correo: this._correo,
    password: this._password,
    rol: 'admin',
  };
  constructor() { }


  public loginMoc(email: string, pasword: string): boolean { 
    const matchUsuarioAndPasword = 
    email === this._correo && pasword === this._password; 
    this.isLoggedIn = matchUsuarioAndPasword; 
    return matchUsuarioAndPasword; 

  } 

  public logout() { 
    this.isLoggedIn = false; 
  } 
 
}

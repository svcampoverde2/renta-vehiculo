import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
@Output() userN:EventEmitter<any> = new EventEmitter();

  private _usuario = 'Admin, Usuario'; 
  private _password = '12345, 123';
  public isLoggedIn: boolean = true;
  public valUser = {
    name: 'Admin',
    usuario: this._usuario,
    rol: 'admin',
  };
  constructor() { }


  public login(usuario: string, pasword: string): boolean { 
    const matchUsuarioAndPasword = 
    usuario === this._usuario && pasword === this._password; 
    this.isLoggedIn = matchUsuarioAndPasword; 
    return matchUsuarioAndPasword; 

  } 

  public logout() { 
    this.isLoggedIn = false; 
  } 

}

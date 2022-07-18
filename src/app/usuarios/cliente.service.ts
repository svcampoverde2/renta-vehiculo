import { DataSource } from '@angular/cdk/collections';
import { BasePortalOutlet } from '@angular/cdk/portal';
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
@Output() userN:EventEmitter<any> = new EventEmitter();
/*private http:HttpClient<any> = new HttpClient(); 
   @Output() http:DataSource<any> [] = HttpClient;
 */

  private _usuario = 'Admin, Usuario'; 
  private _password = '12345, 123';
  public isLoggedIn: boolean = false;
  public valUser = {
    name: 'Admin',
    usuario: this._usuario,
    rol: 'admin',
  };
  constructor() { }


  public loginMock(usuario: string, pasword: string): boolean { 
    const matchUsuarioAndPasword = 
    usuario === this._usuario && pasword === this._password; 
    this.isLoggedIn = matchUsuarioAndPasword; 
    return matchUsuarioAndPasword; 

  } 

  public logoutMock() { 
    this.isLoggedIn = false; 
  } 

}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ciudades } from '../interfaces/ciudad';
import { Ncliente } from '../interfaces/ncliente';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl :string = "http://localhost:8080/api/Clientes";
 // baseUrl1:string = "https://localhost:7052/api/Usuarios/Login";
  baseUrl1:string = "http://localhost:8080/api/Usuarios/Login";
  baseUrl2:string = "http://localhost:8080/api/vehiculos";
 // baseUrl3:string = "https://localhost:7052/api/pagos";
  baseUrl3:string = "http://localhost:8080/api/pagos";
  baseUrl4:string = "http://localhost:8080/api/ciudad/";
  baseUrl5:string = "http://localhost:8080/api/ciudad";
  base:string="https://localhost:8080/api/Cliente/"
  constructor(private http:HttpClient) { }

 /* postClente(data:any){
    return this.http.post<any>(this.baseUrl+"/GuardarClientes", data);
  }*/
  /*putClient(data:any, id:number){
    return this.http.put<any>("http://localhost:3000/clientList/"+id, data)
  }
  eliminarCliente(id:number){
    return this.http.delete<any>("http://localhost:3000/clientList/"+id);
  }*/
 postCliente(data:any){
  let auth_token = localStorage.getItem('token_value');
    const header = new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': `bearer ${auth_token}`
    })
    return this.http.post<any>(this.baseUrl+"/GuardarClientes", data, {headers: header});
 }
 putCliente(data:any, id:number){
  let auth_token = localStorage.getItem('token_value');
  const header = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `bearer ${auth_token}`
  })
  return this.http.put<any>(this.baseUrl+"/Actualizar"+id, data, {headers: header});
 }
 eliminarClient(id:number){
  return this.http.delete(this.base+id);
}
  getCliente(){
    let auth_token = localStorage.getItem('token_value');
    const header = new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': `bearer ${auth_token}`
    })
    return this.http.get<any>(this.baseUrl+"/listaClientes", {headers:header});
  }

  getClientes(id:string){
    let auth_token = localStorage.getItem('token_value');
    const header = new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': `bearer ${auth_token}`
    })
    return this.http.get(this.baseUrl+"buscarbyCedula/"+id, {headers: header});
  }
  //reserva
  postReserva(data:any){
    let auth_token = localStorage.getItem('token_value');
      const header = new HttpHeaders({
          'Content-Type':'application/json',
          'Authorization': `bearer ${auth_token}`
      })
      return this.http.post<any>(this.baseUrl+"/reservas", data);
   }

  //historial de reservas
  getHistorial(){
    let auth_token = localStorage.getItem('token_value');
    const header = new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': `bearer ${auth_token}`
    })
    return this.http.get(this.baseUrl3+"/historialReserva", {headers: header});
  }
 //pagos de resederva
 getPagos(){
  let auth_token = localStorage.getItem('token_value');
  const header = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `bearer ${auth_token}`
  })
  return this.http.get(this.baseUrl3+"/Pagos", {headers: header});
 }
  getVehiculos(){
    let auth_token = localStorage.getItem('token_value');
    const header = new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': `bearer ${auth_token}`
    })
    return this.http.get(this.baseUrl2, {headers: header});
  }
  getCiudades(ciu: ciudades){
    /*let auth_token = localStorage.getItem('token_value');
    const header = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `bearer ${auth_token}`
    })*/
    return this.http.get(this.baseUrl4+"buscarciudad");
  }
  Postciudad(nombre: ciudades): Observable<any>{
    let auth_token = localStorage.getItem('token_value');
    const header = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `bearer ${auth_token}`
    })
    return this.http.post(this.baseUrl5, nombre);
  }
  modificarCiudad(id: number, ciud: any){
  return this.http.put(this.baseUrl4+id, ciud)
  }
  getclit(){
    return  this.http.get(this.baseUrl);
   }

   login(user: Usuario){
    return this.http.post(this.baseUrl1, user);
    }
    get getUsername(){
      return localStorage.getItem('userName');
    }
    get isAutenticado(){
      return !!localStorage.getItem('token_value');
    }
    get getUser(){
      return localStorage.getItem('userRol');
    }

}

//https://jasonwatmore.es/post/2022/03/15/net-6-ejemplo-y-tutorial-de-api-crud#role-cs

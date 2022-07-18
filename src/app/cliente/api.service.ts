import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  postCliente(data:any){
    return this.http.post<any>("http://localhost:3000/clientList/", data);
  }
  getCliente(){
    return this.http.get<any>("http://localhost:3000/clientList/")
  }
  putClient(data:any, id:number){
    return this.http.put<any>("http://localhost:3000/clientList/"+id, data)
  }
  eliminarClient(id:number){
    return this.http.delete<any>("http://localhost:3000/clientList/"+id);
  }
}

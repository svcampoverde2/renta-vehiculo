import { Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from '../api.service';
import { AgregarClienteComponent } from '../agregar-cliente/agregar-cliente.component';
import {ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Ncliente } from 'src/app/interfaces/ncliente';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InformacionComponent } from 'src/app/vehiculo/informacion/informacion.component';
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
 // data:any;
  dataSource: any = [];
  displayedColumns: string[] = ['cedula', 'nombres', 'apellidos', 'correo', 'password', 'direccion', 'ciudad', 'edad', 'acciones'];
 // dataSource!: MatTableDataSource<any>;
  //dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
 
  constructor(private router: Router, private dialog:MatDialog, private api:ApiService) {
    
   }
 
openDialogAgregar(){
 this.dialog.open(AgregarClienteComponent, {
  width:'400px'
 }).afterClosed().subscribe(valu=>{
   if(valu==='Guardar'){
    // this.router.navigate(['/clientes'])
     this.api.getCliente();
   }
 })
 }
 openAgregar(){
   this.dialog.open(InformacionComponent, {
    width:'400px'
   })
 }
 ngOnInit(): void {
  this.api.getCliente().subscribe((data:any) =>{
    this.dataSource = new MatTableDataSource<Ncliente>(data as Ncliente[]);
    console.log(data);
   },
  (errorData)=>(alert("Error usuario no autorizado"),
  this.router.navigate(['/']))
  );

  
  this.getClientes();

  }
  
 usuarioNuevo = new FormGroup({
  cedula: new FormControl('',Validators.required)
})

cedulaTemp:any;
buscarCedula(){
this.cedulaTemp = this.usuarioNuevo.value.cedula;
console.log(this.usuarioNuevo.value.cedula);
this.api.getClientes(this.cedulaTemp).subscribe((data:any) =>{
  this.dataSource = new MatTableDataSource<Ncliente>(data as Ncliente[]); 
},
(errorData)=>(alert("Usuario no autorizado"),
this.router .navigate(['/'])))
}
/*editarClient(row:any){}
eliminarCliente(id:number){}*/

 getClientes(){
  this.api.getCliente()
  .subscribe((data:any) =>{
     this.dataSource = new MatTableDataSource<Ncliente>(data as Ncliente[]);
     console.log(data);
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
    },
    (errorData)=> alert("Error al recargar"))
 }
 editarClient(row:any){
   this.dialog.open(AgregarClienteComponent,{
     width: '40%',
     data:row
   }).afterClosed().subscribe(valu=>{
     if(valu==='update'){
       this.getClientes();
     }
   })

 }
 eliminarCliente(id:number){
   this.api.eliminarClient(id)
   .subscribe((data)=>{
       alert("Registro eliminado con exito");
       this.getClientes();
     },
     (errorData)=>{
     alert("Error, no se elimino el registro")
     }
   )
 }
 applyFilter(event: Event) {
   const filterValue = (event.target as HTMLInputElement).value;
   this.dataSource.filter = filterValue.trim().toLowerCase();

   if (this.dataSource.paginator) {
     this.dataSource.paginator.firstPage();
   }
 }


}

import { Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from '../api.service';
import { AgregarClienteComponent } from '../agregar-cliente/agregar-cliente.component';
import {ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
 
  displayedColumns: string[] = ['cedula', 'nombres', 'apellidos', 'correo', 'direccion', 'edad', 'acciones'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
 
  constructor(private dialog:MatDialog, private api:ApiService) {
    
   }
 
 openDialogAgregar(){
 this.dialog.open(AgregarClienteComponent, {
  width:'40%'
 }).afterClosed().subscribe(valu=>{
   if(valu==='Guardar'){
     this.getClientes();
   }
 })
 }
 ngOnInit(): void {
   this.getClientes();
 }
 getClientes(){
  this.api.getCliente()
  .subscribe({
    next:(res)=>{
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
    },
    error:(err)=>{
      alert("Error al recargar")
    }
  })
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
   .subscribe({
     next:(res)=>{
       alert("Registro eliminado con exito");
       this.getClientes();
     },
     error:()=>{
     alert("Error, no se elimino el registro")
     }
   })
 }
 applyFilter(event: Event) {
   const filterValue = (event.target as HTMLInputElement).value;
   this.dataSource.filter = filterValue.trim().toLowerCase();

   if (this.dataSource.paginator) {
     this.dataSource.paginator.firstPage();
   }
 }


}

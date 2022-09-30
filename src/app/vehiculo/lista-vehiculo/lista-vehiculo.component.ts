import { Component, OnInit } from '@angular/core';
import {ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/cliente/api.service';
import { Vehiculointerface } from 'src/app/interfaces/vehiculointerface';
@Component({
  selector: 'app-lista-vehiculo',
  templateUrl: './lista-vehiculo.component.html',
  styleUrls: ['./lista-vehiculo.component.css']
})
export class ListaVehiculoComponent implements OnInit {

  dataSource: any = [];
  displayedColumns: string[] = ['marca', 'plazas', 'cambios', 'kilometraje', 'tipo', 'costo', 'estado'];
 // dataSource!: MatTableDataSource<any>;
 // dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
 
  constructor(private router: Router, private dialog:MatDialog, private api:ApiService) {
    
  }

  ngOnInit(): void {
    this.api.getVehiculos().subscribe((data:any) =>{
      this.dataSource = new MatTableDataSource<Vehiculointerface>(data as Vehiculointerface[]);
      console.log(data);
     },
    (errorData)=>(alert("Error usuario no autorizado"),
    this.router.navigate(['/']))
    );
  }




  
  usuarioNuevo = new FormGroup({
    marca: new FormControl('',Validators.required)
  })
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
 
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/cliente/api.service';
import { PagoInterface } from 'src/app/interfaces/PagoInterface';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {

  dataSource: any = [];
  displayedColumns: string[] = ['cedula','nombres', 'apellidos','auto','costo', 'estado']
  
  nuevoCliente:any;
  nav: any;
  alert:boolean =false;
  constructor(private router: Router, private dialog:MatDialog, private act:ApiService) { };

  ngOnInit(): void {
   /* this.dataSource = new MatTableDataSource<PagoInterface>(this.data as PagoInterface[]);
    console.log(this.data);*/
    this.act.getHistorial().subscribe((data:any)=>{
      this.dataSource=new MatTableDataSource<PagoInterface>(data as PagoInterface[]);
      console.log(data);
    })
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



}

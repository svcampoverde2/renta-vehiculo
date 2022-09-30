import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router} from '@angular/router';
import { Pago } from './pago';
import { PagoInterface } from '../interfaces/PagoInterface';
import { AgregarPagoComponent } from './agregar-pago/agregar-pago.component';
import { ApiService } from '../cliente/api.service';

@Component({
  selector: 'app-pago',
  templateUrl: './pago/pago.component.html',
  styleUrls: ['./pago/pago.component.css']
})
export class PagoComponent implements OnInit {

  dataSource: any = [];
  displayedColumns: string[] = ['cedula','nombres', 'apellidos','marca','cantidad','costo', 'boton']
  

  nuevoCliente:any;
  nav: any;
  alert:boolean =false;
  constructor(private router: Router, private dialog:MatDialog, private act:ApiService) { 
    
    /*this.nav = this.router.getCurrentNavigation();
    this.nuevoCliente = this.nav.extras.state;
  
    if (this.nuevoCliente != null)
    {      
      console.log(this.nuevoCliente.datosCliente.queryParams);
      this.data.push(this.nuevoCliente.datosCliente.queryParams);
    }*/
    
  };

  ngOnInit(): void {
    this.act.getPagos().subscribe((data:any)=>{
      this.dataSource=new MatTableDataSource<PagoInterface>(data as PagoInterface[]);
      console.log(data);
    })
  }

 /* openDialogPagar(cedula:string,nombres:string,apellidos:string,auto:string,costo:number){ 
    this.dialog.open(AgregarPagoComponent, {
      data: new Pago(cedula,nombres, apellidos, auto,costo),
      width: '400px'
    });
  }*/
  openDialogPagar(){
    /*this.alert = true;
    setTimeout(() => this.alert=false, 4000);*/
    alert("Pago realizado con exito");
    this.router.navigate(['/historial']);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}

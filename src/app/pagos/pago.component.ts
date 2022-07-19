import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router} from '@angular/router';
import { Pago } from './pago';
import { PagoInterface } from '../interfaces/PagoInterface';
import { AgregarPagoComponent } from './agregar-pago/agregar-pago.component';

@Component({
  selector: 'app-pago',
  templateUrl: './pago/pago.component.html',
  styleUrls: ['./pago/pago.component.css']
})
export class PagoComponent implements OnInit {

  dataSource: any = [];
  displayedColumns: string[] = ['cedula','nombres', 'apellidos','auto','costo','boton']
  
  data = [{
        cedula: '0151245245',      
        nombres: 'Andrés Luis',
        apellidos: 'Carvajal Lozano',
        auto: 'CHEVROLET',
        costo: 50
      },
      {
        cedula: '0954658913',      
        nombres: 'Jorge Luis',
        apellidos: 'Charco Aguirre',
        auto: 'HYUNDAI',
        costo: 62
      },
      {
        cedula: '0957962158',      
        nombres: 'Andrea Lisbeth',
        apellidos: 'Romero Haro',
        auto: 'VOLKSWAGEN',
        costo: 59
      }
    ];
  
  nuevoCliente:any;
  nav: any;

  constructor(private router: Router, private dialog:MatDialog) { 
    
    this.nav = this.router.getCurrentNavigation();
    this.nuevoCliente = this.nav.extras.state;
  
    if (this.nuevoCliente != null)
    {      
      console.log(this.nuevoCliente.datosCliente.queryParams);
      this.data.push(this.nuevoCliente.datosCliente.queryParams);
    }
    
  };

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<PagoInterface>(this.data as PagoInterface[]);
    console.log(this.data);
  }

  openDialogPagar(cedula:string,nombres:string,apellidos:string,auto:string,costo:number){ 
    this.dialog.open(AgregarPagoComponent, {
      data: new Pago(cedula,nombres, apellidos, auto,costo),
      width: '40%'
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}

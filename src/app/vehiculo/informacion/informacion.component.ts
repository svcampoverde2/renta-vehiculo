import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ClienteService } from 'src/app/cliente.service';
import { ApiService } from 'src/app/cliente/api.service';
import { ciudades } from 'src/app/interfaces/ciudad';
import { __values } from 'tslib';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {
//id !: any
provinciaN: FormGroup;
id: number | undefined;
actionBtn: string ="Guardar";
dataSource: any = [];
  displayedColumns: string[] = ['nombre', 'estado'];
  constructor(private op:ApiService, private dialog:MatDialogRef<InformacionComponent>, private fb: FormBuilder,) {
    this.provinciaN = this.fb.group({
      nombre: ['', Validators.required],
      estado: ['', Validators.required],
    })
   }

  /*provinciaN = new FormGroup({
    provincia: new FormControl('', Validators.required),
    estado:new FormControl('', Validators.required),
  })*/

  ngOnInit(): void {

  }
  guardarProvincia(){
    const provincia : any ={
      nombre: this.provinciaN.get('nombre')?.value,
      estado: this.provinciaN.get('estado')?.value,
    }
    if(this.id == undefined){
      this.op.Postciudad(provincia).subscribe(datos =>{
        //this.dataSource= new MatTableDataSource<ciudades>(datos as ciudades[]);
        alert("registro guardado con exito");
        this.provinciaN.reset();
        this.dialog.close('Guardar');
    }, errro => {
    alert("Error, el registro no se guardado");
      this.dialog.close();})
  }else{
   provincia.id = this.id;
   this.op.modificarCiudad(this.id, provincia).subscribe((data)=>{
     this.provinciaN.reset();
    this.dialog.close('Actualizar');
     this.id = undefined;
     alert("ciudad actualizada con exito");
   },
   error =>{
     console.log(error);
   })
  }
  /*agregar(){
    this.op.Postciudad(this.provinciaN.value as ciudades).subscribe(datos =>{
      //this.dataSource= new MatTableDataSource<ciudades>(datos as ciudades[]);
      alert("registro guardado con exito");
      this.provinciaN.reset();
      this.dialog.close();
    alert("Error, el registro no se guardado")})*/

  }
}

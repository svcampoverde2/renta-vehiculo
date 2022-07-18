import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {
  constructor(private router:Router, private local:Location) {
   };
  cliente(){
    this.router.navigate(['cliente']);
  }

  ngOnInit(): void {}
  
  cerrarSesion(){
    this.local.back();
    localStorage.clear();
    }

}

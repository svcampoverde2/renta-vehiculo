import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-recp-password',
  templateUrl: './recp-password.component.html',
  styleUrls: ['./recp-password.component.css']
})
export class RecpPasswordComponent implements OnInit {
  Recuperar!: FormGroup
  constructor(private dialog: MatDialog) { }
 
    
  ngOnInit(): void {
    this.Recuperar = new FormGroup({
      correo: new FormControl('', Validators.required)
    });
  }
  

}

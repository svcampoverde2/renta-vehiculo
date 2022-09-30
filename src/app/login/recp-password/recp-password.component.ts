import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-recp-password',
  templateUrl: './recp-password.component.html',
  styleUrls: ['./recp-password.component.css']
})
export class RecpPasswordComponent implements OnInit {

  constructor(private dialogRef:MatDialog) { }
  Recuperar = new FormGroup({
    correo: new FormControl('', Validators.required)
  });
  enviar(){
    if(!this.dialogRef){
    this.Recuperar.value.correo;
   }
   else{
    this.dialogRef.closeAll();
   }
  }
  ngOnInit(): void {

  }


}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { HistorialComponent } from './historial/historial.component';
import {MatInputModule} from '@angular/material/input';
@NgModule({
  declarations: [
    HistorialComponent
  ],
  imports: [MatDialogModule, MatButtonModule,MatCardModule, MatTableModule, MatInputModule]
})
export class PagoModule { }

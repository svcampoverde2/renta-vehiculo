import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesComponent } from './clientes/clientes.component';
import { ClientRoutingModule } from './routing.module';
import { AgregarClienteComponent } from './agregar-cliente/agregar-cliente.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import {MatTableModule} from '@angular/material/table';
/*import {MatTabsModule} from '@angular/material/tabs';*/
import {ReactiveFormsModule } from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [ClientesComponent, AgregarClienteComponent],
  imports: [
    CommonModule, ClientRoutingModule, MatIconModule, MatInputModule, MatDialogModule, MatButtonModule,
    MatTableModule, ReactiveFormsModule, MatPaginatorModule, MatCardModule
  ]
})
export class ClienteModule { }

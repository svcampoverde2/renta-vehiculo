import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from './footer/footer.component';
import { AppRouterModule } from './app-router.module';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from '../app/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input'
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
//import { ToastrModule  } from 'rxjs';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table'

import { PageInicialComponent } from './page-inicial/page-inicial.component';
import {MatMenuModule} from '@angular/material/menu';
import { HeaderComponent } from '../app/header/HeaderComponent';
import { AdministradorComponent } from '../app/cliente/usuarios/administrador/administrador.component';
import { UserClienteComponent } from '../app/cliente/usuarios/user-cliente/user-cliente.component';
import {HttpClientModule} from '@angular/common/http';
import { CatalogoVehiculoComponent } from '../app/vehiculo/catalogo-vehiculo/catalogo-vehiculo.component';
import { PagoComponent } from '../app/pago/pago.component';
import { AgregarPagoComponent } from '../app/pago/agregar-pago/agregar-pago.component';
import {ListaVehiculoComponent}from '../app/vehiculo/lista-vehiculo/lista-vehiculo.component';
import { AppComponent } from './app.component';
import { RecpPasswordComponent } from '../app/login/recp-password/recp-password.component';
import { LoginModule } from './login/login.module';
import { VehiculoModule } from './vehiculo/vehiculo.module';
import { PagoModule } from './pago/pago.module';
import {MatPaginatorModule} from '@angular/material/paginator';
import { InformacionComponent } from '../app/vehiculo/informacion/informacion.component';
import { ApiService } from './cliente/api.service';

@NgModule({
  declarations: [
   HeaderComponent,
    FooterComponent,
   LoginComponent,
   RecpPasswordComponent,
    PageInicialComponent,
    AdministradorComponent,
    UserClienteComponent,
    PagoComponent,
    AgregarPagoComponent,
    CatalogoVehiculoComponent,
    ListaVehiculoComponent,
    InformacionComponent,

    AppComponent,

  ],
  imports: [
    BrowserModule, AppRouterModule, BrowserAnimationsModule, MatTableModule, MatPaginatorModule,
    MatButtonModule, ReactiveFormsModule, MatInputModule, MatTabsModule,
    MatToolbarModule, MatIconModule, MatDialogModule, MatCardModule, HttpClientModule, MatMenuModule, LoginModule, VehiculoModule, PagoModule
  ],
  entryComponents: [LoginComponent],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

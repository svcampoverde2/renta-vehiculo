import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from "./header/HeaderComponent";
import { FooterComponent } from './footer/footer.component';
import { AppRouterModule } from './app-router.module';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input'
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table'
import { PageInicialComponent } from './page-inicial/page-inicial.component';

import { AdministradorComponent } from './usuarios/administrador/administrador.component';
import { UserClienteComponent } from './usuarios/user-cliente/user-cliente.component';
import {HttpClientModule} from '@angular/common/http';
import { CatalogoVehiculoComponent } from './catalogo-vehiculo/catalogo-vehiculo.component';
import { PagoComponent } from './pagos/pago.component';
import { AgregarPagoComponent } from './pagos/agregar-pago/agregar-pago.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    PageInicialComponent,
    AdministradorComponent,
    UserClienteComponent,
    CatalogoVehiculoComponent,
    PagoComponent,
    AgregarPagoComponent,
    AppComponent,
   
  ],
  imports: [
    BrowserModule, AppRouterModule, BrowserAnimationsModule, MatTableModule,
    MatButtonModule, ReactiveFormsModule, MatInputModule, MatTabsModule,
    MatToolbarModule, MatIconModule, MatDialogModule, MatCardModule, HttpClientModule
   
  ],
  entryComponents: [LoginComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

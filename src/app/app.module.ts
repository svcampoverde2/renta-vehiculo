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
import { PageInicialComponent } from './page-inicial/page-inicial.component';
import { AppComponent } from './app.component';
import { AdministradorComponent } from './usuarios/administrador/administrador.component';
import { UserClienteComponent } from './usuarios/user-cliente/user-cliente.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    PageInicialComponent,
    AdministradorComponent,
    UserClienteComponent,
    AppComponent,
  ],
  imports: [
    BrowserModule, AppRouterModule, BrowserAnimationsModule,
    MatButtonModule, ReactiveFormsModule, MatInputModule, MatTabsModule,
    MatToolbarModule, MatIconModule, MatDialogModule, MatCardModule, HttpClientModule
   
  ],
  entryComponents: [LoginComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

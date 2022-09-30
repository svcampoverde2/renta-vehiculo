import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdministradorComponent } from "../app/cliente/usuarios/administrador/administrador.component";

import { LoginComponent } from "./login/login.component";
import { PageInicialComponent } from "./page-inicial/page-inicial.component";
import { UserClienteComponent } from "../app/cliente/usuarios/user-cliente/user-cliente.component";
import { CheckLoginGuard } from "./guard/check-login.guard";
import { CatalogoVehiculoComponent } from "../app/vehiculo/catalogo-vehiculo/catalogo-vehiculo.component";
import { PagoComponent } from "../app/pago/pago.component";
import { MatMenuTrigger } from "@angular/material/menu";
import { ListaVehiculoComponent } from "./vehiculo/lista-vehiculo/lista-vehiculo.component";
import { HistorialComponent } from "./pago/historial/historial.component";


//route
const routes:Routes=[
    {path:'',component:PageInicialComponent},
    {path:'pageInicial',component:PageInicialComponent},
    {path:'administrador', component:AdministradorComponent, canLoad:[CheckLoginGuard], canActivate:[CheckLoginGuard],}, 
    {path:'userCliente', component:UserClienteComponent, /*canActivate:[CheckLoginGuard], canLoad:[CheckLoginGuard],*/
     },
    {path:'clientes',loadChildren:()=>
    import('../app/cliente/cliente.module').then((c)=> c.ClienteModule )},
    {path:'sesion', component:LoginComponent},
    {path:'catalogo', component:CatalogoVehiculoComponent},
    {path:'pago', component:PagoComponent},
    {path:'listavehiculo', component:ListaVehiculoComponent},
    {path: 'historial', component:HistorialComponent},
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]

})

export class AppRouterModule{}

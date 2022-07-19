import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdministradorComponent } from "./usuarios/administrador/administrador.component";

import { LoginComponent } from "./login/login.component";
import { PageInicialComponent } from "./page-inicial/page-inicial.component";
import { UserClienteComponent } from "./usuarios/user-cliente/user-cliente.component";
import { CheckLoginGuard } from "./guard/check-login.guard";
import { CatalogoVehiculoComponent } from "./catalogo-vehiculo/catalogo-vehiculo.component";
import { PagoComponent } from "./pagos/pago.component";


//route
const routes:Routes=[
    {path:'',component:PageInicialComponent},
    {path:'pageInicial',component:PageInicialComponent},
    {path:'administrador', component:AdministradorComponent, /*canActivate:[CheckLoginGuard],*/canLoad:[CheckLoginGuard]},
    {path:'userCliente', component:UserClienteComponent, /*canActivate:[CheckLoginGuard], canLoad:[CheckLoginGuard],*/
     },
    /* {path:'clientes', component:ClientesComponent},
    */ {path:'clientes',loadChildren:()=>
    import('./cliente/cliente.module').then((c)=> c.ClienteModule )},
    {path:'sesion', component:LoginComponent},
    {path:'catalogo', component:CatalogoVehiculoComponent},
    {path:'pago', component:PagoComponent}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]

})

export class AppRouterModule{}

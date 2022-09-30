import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ClienteService } from '../cliente.service';

@Injectable({
  providedIn: 'root'
})
export class CheckLoginGuard implements CanActivate, CanLoad {
  constructor(private log:ClienteService, private router:Router){}
  
  canActivate():Observable<boolean> | boolean{
  if(!this.log.isLoggedIn){
    this.router.navigateByUrl('/pageInicial')
  }
   return this.log.isLoggedIn;
  }
  canLoad():Observable<boolean> | boolean {
    if(!this.log.isLoggedIn){
      this.router.navigateByUrl('/pageInicial-')
    }
    return this.log.isLoggedIn;
  }
}

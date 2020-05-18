import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {LoginService} from './shared/services/login.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AutorisationGuard implements CanActivate {

  constructor (private serAuth:LoginService,private router:Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      const isConnecter=this.serAuth.isAuthentifier();
      if(!isConnecter) 
      this.router.navigate(['/Authentication']);
      else
      return this.serAuth.isAuthentifier();
  }
  
}

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot,Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate{
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):any{
    if(sessionStorage.getItem('Phone,Password')){
      return true;
    }
    sessionStorage.setItem('Redirect',state.url)
    this.router.navigate(['/login']);
    return false;
  }
  constructor(public router:Router) { }
}

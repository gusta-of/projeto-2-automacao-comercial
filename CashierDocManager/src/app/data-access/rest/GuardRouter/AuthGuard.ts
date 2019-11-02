
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) :  Observable<boolean> | boolean  {
        if(localStorage.getItem('currentUser') != null) {
            return true;
        }
        else {
            console.log(localStorage.getItem('currentUser'));
            this.router.navigate(['login']);
        }
    }
}
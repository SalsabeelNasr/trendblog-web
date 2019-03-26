import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Injectable({ providedIn: 'root' })
export class PermissionGuard implements CanActivate {
    myRole = 'admin';
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        // const currentUser = this.authenticationService.currentUserValue;
        if (this.myRole === 'admin') {
            // can access so return true
            return true;
        }
        // go to main or to not auth page
        return false;
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        // const currentUser = this.authenticationService.currentUserValue;
        if (this.myRole === 'admin') {
            // can access so return true
            return true;
        }
        // go to main or to not auth page
        return false;
    }
}

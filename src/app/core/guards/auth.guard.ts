import { Injectable } from '@angular/core';
import {
  CanActivate, CanActivateChild, CanLoad, ActivatedRouteSnapshot,
  RouterStateSnapshot, Router, Route, UrlTree, UrlSegment
} from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from './../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const { url } = state;
    return this.checkLogin(url);
  }

  canActivateChild(
    next: ActivatedRouteSnapshot, state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const { url } = state;
    return this.checkLogin(url);
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    const url = `/${route.path}`;
    return this.checkLogin(url) as boolean;
  }

  private checkLogin(url: string): boolean | UrlTree {
    if (this.authService.isLoggedIn) { return true; }

    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;

    // Navigate to the login page, return UrlTree
    return this.router.parseUrl('/login');
  }

}

import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from "@angular/router";
import { Observable, of } from 'rxjs';
import {AuthService} from "./auth.service";
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(
    private _authService: AuthService,
    private _router: Router
  ) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const redirectUrl = state.url === '/login' ? '' : state.url;
    return this._check(redirectUrl);
  }
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const redirectUrl = state.url === '/login' ? '' : state.url;
    return this._check(redirectUrl);
  }

  private _check(redirectURL: string): Observable<boolean>
  {
    // Check the authentication status
    return this._authService.checkAutenticacion()
      .pipe(
        switchMap((authenticated) => {

          // If the user is authenticated...
          if ( !authenticated )
          {
            // Redirect to the root
            this._router.navigate(['login'], {queryParams: {redirectURL}});

            // Prevent the access
            return of(false);
          }

          console.log("consedido", redirectURL);
          // Allow the access
          return of(true);
        })
      );
  }
}

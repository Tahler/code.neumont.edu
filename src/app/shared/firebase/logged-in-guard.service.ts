import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { Observable } from 'rxjs/Rx';

import { AuthService } from './auth.service';

/**
 * Only allows those who are logged in to pass.
 * If the user is not logged in, they are redirected to the login required page.
 */
@Injectable()
export class LoggedInGuard implements CanActivate {
  constructor(
      private router: Router,
      private authService: AuthService) { }

  canActivate(): Observable<boolean> {
    return this.authService.loggedIn.map(loggedIn => {
      if (!loggedIn) {
        this.router.navigateByUrl('/login-required');
      }
      return loggedIn;
    }).take(1); // Observable needs to complete
  }
}

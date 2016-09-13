import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { Observable } from 'rxjs/Rx';

import { AuthService } from './auth.service';

/**
 * Only allows those with a verified email to pass.
 * If the user is unverified, they are redirected to the verification required page.
 */
@Injectable()
export class VerifiedGuard implements CanActivate {
  constructor(
      private router: Router,
      private authService: AuthService) { }

  canActivate(): Observable<boolean> {
    return this.authService.verified.map(verified => {
      if (!verified) {
        this.router.navigateByUrl('/verification-required');
      }
      return verified;
    }).take(1); // Observable needs to complete
  }
}

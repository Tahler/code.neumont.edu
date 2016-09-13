import { Component, OnInit, ViewChild } from '@angular/core';

import { AuthService, LoginModalService, User } from '../../shared';

@Component({
  moduleId: module.id,
  selector: 'app-auth-area',
  templateUrl: 'auth-area.component.html',
  styleUrls: ['auth-area.component.css']
})
export class AuthAreaComponent implements OnInit {
  user: User;

  constructor(
      private authService: AuthService,
      private loginModalService: LoginModalService) { }

  ngOnInit() {
    this.authService.user.subscribe(user => this.user = user);
  }

  logIn(): void {
    // Deferred to the login modal
    this.loginModalService.show();
  }

  logOut(): void {
    this.authService.logOut();
  }
}

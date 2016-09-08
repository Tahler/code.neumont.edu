import { Component } from '@angular/core';

import { AuthService } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'app-reset-password',
  templateUrl: 'reset-password.component.html',
  styleUrls: ['reset-password.component.css']
})
export class ResetPasswordComponent {
  email = '';
  state = 'Input';

  constructor(private authService: AuthService) { }

  sendPasswordReset() {
    // this.state = 'Sending';
    this.authService.sendPasswordResetEmail(this.email).then(
        () => this.state = 'Sent',
        err => {
          console.error(err);
          this.state = 'Error';
        });
  }
}

type State = 'Input' | 'Sending' | 'Sent' | 'Error';

import { Component } from '@angular/core';

import { AuthService } from '../shared/firebase/auth.service';

@Component({
  selector: 'app-verification-required',
  templateUrl: 'verification-required.component.html',
  styleUrls: ['verification-required.component.css']
})
export class VerificationRequiredComponent {
  constructor(private authService: AuthService) { }
}

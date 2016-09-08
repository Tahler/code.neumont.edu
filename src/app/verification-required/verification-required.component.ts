import { Component } from '@angular/core';

import { AuthService } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'app-verification-required',
  templateUrl: 'verification-required.component.html',
  styleUrls: ['verification-required.component.css']
})
export class VerificationRequiredComponent {
  constructor(private authService: AuthService) { }
}

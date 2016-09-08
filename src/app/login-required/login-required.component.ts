import { Component } from '@angular/core';
import { LoginModalService } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'app-login-required',
  templateUrl: 'login-required.component.html',
  styleUrls: ['login-required.component.css']
})
export class LoginRequiredComponent {
  constructor(private loginModalService: LoginModalService) { }
}

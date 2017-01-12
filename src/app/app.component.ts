import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

import { LoginModalComponent } from './login-modal';
import { AuthService } from './shared/firebase/auth.service';
import { RepositoryService } from './shared/firebase/repository.service';
import { LoginModalService } from './shared/login-modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('loginModal') loginModal: LoginModalComponent;

  constructor(
      // viewContainerRef is needed for ng2-bootstrap modals
      private viewContainerRef: ViewContainerRef,
      private authService: AuthService,
      private repoService: RepositoryService,
      private loginModalService: LoginModalService) { }

  ngOnInit() {
    this.loginModalService.shows
        .subscribe(() => this.loginModal.show());
  }
}

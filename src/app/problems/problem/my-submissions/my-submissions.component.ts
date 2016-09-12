import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Rx';

import { AuthService, LoginModalService, MySubmission, RepositoryService } from '../../../shared';
import { SharingService } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'app-my-submissions',
  templateUrl: 'my-submissions.component.html',
  styleUrls: ['my-submissions.component.css']
})
export class MySubmissionsComponent implements OnInit, OnDestroy {
  mySubmissions: MySubmission[];
  mySubmissionsSubscription: Subscription;

  constructor(
      private authService: AuthService,
      private loginModalService: LoginModalService,
      private sharingService: SharingService,
      private repoService: RepositoryService) { }

  ngOnInit() {
    // Do not try to load submissions until the user is logged in
    this.authService.user.subscribe(
        user => {
          if (user) {
            this.sharingService.problemObservable.subscribe(
                problem => {
                  if (problem) {
                    this.mySubmissionsSubscription = this.repoService
                        .getSubmissions(user.$key, problem.$key).subscribe(
                            submissions => this.mySubmissions = submissions);
                  }
                });
          } else {
            this.mySubmissions = [];
            this.killSubscription();
          }
        });
  }

  ngOnDestroy() {
    this.killSubscription();
  }

  killSubscription() {
    if (this.mySubmissionsSubscription) {
      this.mySubmissionsSubscription.unsubscribe();
    }
  }
}

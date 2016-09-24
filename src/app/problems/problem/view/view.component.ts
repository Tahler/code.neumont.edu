import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Observable, Subscription } from 'rxjs/Rx';

import { SharingService } from '../shared';
import { AuthService } from '../../../shared/firebase/auth.service';
import { RepositoryService } from '../../../shared/firebase/repository.service';
import { Problem } from '../../../shared/models/problem';
import { Submission } from '../../../shared/models/submission';
import { User } from '../../../shared/models/user';

@Component({
  selector: 'app-view',
  templateUrl: 'view.component.html',
  styleUrls: ['view.component.css']
})
export class ViewComponent implements OnInit, OnDestroy {
  problem: Problem;
  creator: User;
  submission: Submission;

  subscription: Subscription;

  constructor(
      private router: Router,
      private repoService: RepositoryService,
      private authService: AuthService,
      private sharingService: SharingService) { }

  ngOnInit() {
    this.subscription = this.sharingService.problemObservable.subscribe(
        problem => {
          this.problem = problem;
          if (problem) {
            this.repoService
                .getUser(problem.creatorUid)
                .subscribe(user => this.creator = user);
          }
        });
    this.sharingService
        .submissionObservable
        .subscribe(submission => this.submission = submission);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  isMyProblem(): Observable<boolean> {
    return this.authService.auth.map(
        auth => auth && this.creator && auth.uid === this.creator.$key);
  }

  delete() {
    if (window.confirm('Are you sure you want to delete this problem?')) {
      this.repoService.deleteProblem(this.problem.$key);
      this.router.navigateByUrl('/problems');
    }
  }
}

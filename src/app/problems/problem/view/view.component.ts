import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Observable, Subscription } from 'rxjs/Rx';

import { CodeEditorComponent } from '../../../code-editor';
import { SubmissionModalComponent } from '../../../submission-modal';
import { AuthService, Problem, RepositoryService, Submission, User } from '../../../shared';
import { SharingService } from '../shared';

@Component({
  moduleId: module.id,
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

  onSubmissionChange(newSubmission: Submission) {
    this.sharingService.submission = newSubmission;
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

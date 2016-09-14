import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
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

  @ViewChild('editor') editor: CodeEditorComponent;

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
        .subscribe(submission => {
          console.log('got submission from sharing', submission);
          // this.editor.submission = submission;
          this.submission = submission;
        });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onSubmissionChange(newSubmission: Submission) {
    if (this.submission != newSubmission) {
      console.log('new submission');

      // Note: Loops around via subscription
      this.sharingService.submission = newSubmission;
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

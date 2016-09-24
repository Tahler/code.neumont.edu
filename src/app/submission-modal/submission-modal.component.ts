import { Component, Input, OnDestroy, ViewChild } from '@angular/core';

import { Subscription } from 'rxjs/Rx';
import { ModalDirective, ModalOptions } from 'ng2-bootstrap';

import { SubmissionService } from './submission.service';
import { AuthService } from '../shared/firebase/auth.service';
import { Result } from '../shared/models/results';
import { Submission } from '../shared/models/submission';

const configPreventCloseOnClickOutside: ModalOptions = { backdrop: 'static' };
const configAllowCloseOnClickOutside: ModalOptions = {};

@Component({
  selector: 'app-submission-modal',
  templateUrl: 'submission-modal.component.html',
  styleUrls: ['submission-modal.component.css']
})
export class SubmissionModalComponent implements OnDestroy {
  @Input() problemId: string;

  @ViewChild('modal') modal: ModalDirective;
  submissionSubscription: Subscription;

  state: State;
  lastSubmission: Submission;
  result: Result;

  constructor(
    private authService: AuthService,
    private submissionService: SubmissionService) { }

  ngOnDestroy() {
    this.killSubscription();
  }

  handleSubmission(submission: Submission) {
    submission.problem = this.problemId;
    this.authService.token.take(1).subscribe(token => {
      if (token) {
        submission.submitterToken = token;
      }

      // Disallow click away
      this.modal.config = configPreventCloseOnClickOutside;
      // Save in case of retry
      this.lastSubmission = submission;
      this.state = State.Submitting;
      this.submissionSubscription = this.submissionService.submit(submission).subscribe(
          result => {
            this.state = State.ResultReceived;
            this.result = result;
          },
          err => {
            this.state = State.ServerError;
          },
          () => {
            // Allow click outside
            this.modal.config = configAllowCloseOnClickOutside;
            this.killSubscription();
          });
      this.modal.show();
    });
  }

  retry() {
    this.handleSubmission(this.lastSubmission);
  }

  killSubscription() {
    if (this.submissionSubscription) {
      this.submissionSubscription.unsubscribe();
      this.submissionSubscription = null;
    }
  }

  cancel() {
    this.killSubscription();
    this.close();
  }

  close() {
    this.modal.hide();
  }

  onHide() {
    this.killSubscription();
  }
}

enum State {
  Submitting,
  ResultReceived,
  ServerError
}

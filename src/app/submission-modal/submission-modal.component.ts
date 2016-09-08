import { Component, Input, OnDestroy, ViewChild } from '@angular/core';

import { Subscription } from 'rxjs';
import { ModalDirective, ModalOptions } from 'ng2-bootstrap/ng2-bootstrap';

import {
  AuthService,
  AnsiToHtmlPipe,
  PrecisionPipe,
  Result,
  Submission,
  SubmissionService
} from '../shared';

const ConfigPreventCloseOnClickOutside: ModalOptions = { backdrop: 'static' };

@Component({
  moduleId: module.id,
  selector: 'app-submission-modal',
  templateUrl: 'submission-modal.component.html',
  styleUrls: [
    'submission-modal.component.css',
    // TODO:
    // '/vendor/font-awesome/css/font-awesome.css'
  ],
  pipes: [
    AnsiToHtmlPipe,
    PrecisionPipe
  ],
  providers: [
    AuthService,
    SubmissionService
  ]
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
      this.modal.config = ConfigPreventCloseOnClickOutside;
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
            this.modal.config = {};
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

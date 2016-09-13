import { Injectable } from '@angular/core';

import { Observable, BehaviorSubject } from 'rxjs/Rx';

import { Problem, Submission } from '../../../shared';

@Injectable()
export class SharingService {
  // TODO: remove in RC6
  constructor() { console.log('initting SharingService'); }

  private _submission = new BehaviorSubject<Submission>(null);
  public set submission(submission: Submission) {
    this._submission.next(submission);
  }
  public get submission(): Submission {
    return this._submission.value;
  }
  public get submissionObservable(): Observable<Submission> {
    return this._submission.asObservable();
  }

  private _problem = new BehaviorSubject<Problem>(null);
  public set problem(problem: Problem) {
    this._problem.next(problem);
  }
  public get problem(): Problem {
    return this._problem.value;
  }
  public get problemObservable(): Observable<Problem> {
    return this._problem.asObservable();
  }
}

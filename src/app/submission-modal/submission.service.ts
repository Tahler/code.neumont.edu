import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Observable } from 'rxjs/Rx';

import { Result } from '../shared/models/results';
import { Submission } from '../shared/models/submission';

import { environment } from '../../environments/environment';

const url = environment.submission_url;
const requestHeaders = new Headers({ 'Content-Type': 'application/json' });

@Injectable()
export class SubmissionService {
  constructor(private http: Http) { }

  submit(submission: Submission): Observable<Result> {
    return this.http
        .post(url, submission, {headers: requestHeaders})
        .map(res => res.json() as Result);
  }
}

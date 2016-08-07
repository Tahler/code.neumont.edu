import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFire } from 'angularfire2';
import { MySubmission, Problem, SuccessfulSubmission, TestCase, User } from '../';

@Injectable()
export class RepositoryService {
  constructor(private af: AngularFire) { }

  getUser(uid: string): Observable<User> {
    return uid
        ? this.af.database.object(`/users/${uid}`).map(
              snapshot => {
                return snapshot.$value !== null
                  ? snapshot as User
                  : null;
              })
        : null;
  }

  getProblem(id: string): Observable<Problem> {
    return this.af.database.object(`/problems/${id}`);
  }

  getTopProblems(numProblems: number): Observable<Problem[]> {
    return this.af.database.list('/problems')
        .take(numProblems);
  }

  getSubmissions(userId: string, problemId: string): Observable<MySubmission[]> {
    return this.af.database.list(`/submissions/${userId}/${problemId}`, {
      query: {
        orderByChild: 'submittedOn'
      }
    }).map(submissions => submissions.reverse());
  }

  /**
   * Returns the key of the newly created problem.
   */
  createProblem(problem: Problem, testCases: TestCase[]): string {
    problem.lastUpdated = new Date();
    // TODO: error handling
    // Push the new problem and save the key
    let key = this.af.database.list(`/problems`).push(problem).key;
    // Set the tests for the new problem
    this.af.database.object(`/tests/${key}`).set(testCases);
    return key;
  }

  updateProblem(problem: Problem, testCases: TestCase[]): Promise<void> {
    return this.af.database.object(`/problems/${problem.$key}`).set(problem);
  }

  getLeaderboard(problemId: string): Observable<SuccessfulSubmission[]> {
    return this.af.database.list(`/successfulSubmissions/${problemId}`, {
      query: {
        orderByChild: 'execTime',
        limitToLast: 10
      }
    });
  }
}

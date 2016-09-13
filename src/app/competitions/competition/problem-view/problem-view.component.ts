import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable, Subscription } from 'rxjs/Rx';

import { SubmissionModalComponent } from '../../../submission-modal';
import { CompetitionProblem, RepositoryService, Submission, User } from '../../../shared';

@Component({
  moduleId: module.id,
  selector: 'app-problem-view',
  templateUrl: 'problem-view.component.html',
  styleUrls: ['problem-view.component.css']
})
export class ProblemViewComponent implements OnInit, OnDestroy {
  problem: CompetitionProblem;
  submission: any = {};

  solved: boolean;

  endedAlready: boolean;
  endedWhileWatching = false;

  timerSubscription: Subscription;

  constructor(
      private router: Router,
      private route: ActivatedRoute,
      private repoService: RepositoryService) { }

  ngOnInit() {
    this.route.parent.params.subscribe(parentRouteParams => {
      let competitionId = parentRouteParams['id'];
      this.submission.competition = competitionId;
      this.repoService
          .getCompetition(competitionId)
          .take(1)
          .subscribe(competition => {
            let now = new Date();
            // Designate as finished or schedule the finish time.
            if (now < competition.endTime) {
              this.endedAlready = false;
              this.timerSubscription = Observable.timer(competition.endTime).subscribe(() => {
                this.endedWhileWatching = true;
                this.timerSubscription.unsubscribe();
              });
            } else {
              this.endedAlready = true;
            }
          });
      this.route.params.subscribe(routeParams => {
        let problemId = routeParams['problemId'];
        this.submission.problem = problemId;
        this.repoService
            .getCompetitionProblem(competitionId, problemId)
            .subscribe(problem => this.problem = problem);
        this.repoService
            .hasSolvedCompetitionProblem(competitionId, problemId)
            .subscribe(solved => this.solved = solved);
      });
    });
  }

  ngOnDestroy() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }
}

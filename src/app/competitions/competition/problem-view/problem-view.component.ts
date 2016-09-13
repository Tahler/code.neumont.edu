import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable, Subscription } from 'rxjs/Rx';

import { SubmissionModalComponent } from '../../../submission-modal';
import {
  CompetitionProblem,
  RepositoryService,
  Submission,
  User
} from '../../../shared';

@Component({
  moduleId: module.id,
  selector: 'app-problem-view',
  templateUrl: 'problem-view.component.html',
  styleUrls: ['problem-view.component.css']
})
export class ProblemViewComponent implements OnInit {
  problem: CompetitionProblem;
  submission: any = {};

  solved: boolean;

  endedAlready: boolean;
  endedWhileWatching = false;

  constructor(
      private router: Router,
      private route: ActivatedRoute,
      private repoService: RepositoryService) { }

  ngOnInit() {
    let parentActivatedRoute = this.router.routerState.parent(this.route);
    parentActivatedRoute.params.subscribe(params => {
      let competitionId = params['id'];
      this.submission.competition = competitionId;
      this.repoService
          .getCompetition(competitionId)
          .subscribe(competition => {
            let now = new Date();
            // Designate as finished or schedule the finish time.
            if (now < competition.endTime) {
              this.endedAlready = false;
              Observable.timer(competition.endTime).subscribe(() => {
                this.endedWhileWatching = true;
              });
            } else {
              this.endedAlready = true;
            }
          });
      this.route.params.subscribe(params => {
        let problemId = params['problemId'];
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
}

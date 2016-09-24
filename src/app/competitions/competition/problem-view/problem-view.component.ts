import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable, Subscription } from 'rxjs/Rx';

import { CompetitionProblem } from '../../../shared/models/competition';
import { RepositoryService } from '../../../shared/firebase/repository.service';
import { SubmissionTemplateService } from '../../../shared/submission-template/submission-template.service';

@Component({
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
      private repoService: RepositoryService,
      private templateService: SubmissionTemplateService) { }

  ngOnInit() {
    // Load in the template
    this.templateService
        .getDefaultSubmission()
        .take(1)
        .subscribe(defaultSubmission => {
          this.submission.lang = defaultSubmission.lang;
          this.submission.src = defaultSubmission.src;
        });

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

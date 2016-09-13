import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable, Subscription } from 'rxjs/Rx';

import { ProblemPreviewComponent } from './problem-preview';
import { ScoreboardPreviewComponent } from './scoreboard-preview';
import {
  AuthService,
  Competition,
  CompetitionProblem,
  CompetitionScoreboardRanking,
  RepositoryService
} from '../../shared';

@Component({
  moduleId: module.id,
  selector: 'app-competition',
  templateUrl: 'competition.component.html',
  styleUrls: ['competition.component.css']
})
export class CompetitionComponent implements OnInit, OnDestroy {
  collapsed = false;
  ended: boolean;
  competition: Competition;
  problems: CompetitionProblem[];
  myRanking: any;

  timerSubscription: Subscription;

  constructor(
      private router: Router,
      private route: ActivatedRoute,
      private authService: AuthService,
      private repoService: RepositoryService) { }

  ngOnInit() {
    let competitionId = this.route.snapshot.params['id'];
    this.repoService
        .getCompetition(competitionId)
        .subscribe(competition => {
          this.competition = competition;
          if (new Date() < competition.endTime) {
            this.ended = false;
            this.timerSubscription = Observable.timer(competition.endTime).subscribe(() => {
              this.ended = true;
              this.timerSubscription.unsubscribe();
            });
          } else {
            this.ended = true;
          }
        });
    this.repoService
        .getCompetitionProblems(competitionId)
        .subscribe(competitionProblems => {
          if (this.route.children.length && competitionProblems[0]) {
            // TODO: bring this back with updated router
            // this.router.navigate([competitionProblems[0].$key], { relativeTo: this.route });
          }
        });
    this.authService.user.subscribe(user => {
      let uid = user.$key;
      this.repoService
          .getCompetitionRanking(competitionId, uid)
          .subscribe(ranking => this.myRanking = ranking);
    });
  }

  ngOnDestroy() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  hasSolved(problemId: string): boolean {
    let submissionInfo = this.myRanking && this.myRanking.problems
        ? this.myRanking.problems[problemId]
        : null;
    return submissionInfo && submissionInfo.solutionSubmittedAfter !== undefined;
  }

  numIncorrect(problemId: string): number {
    // null if no submissions have been made to this problem
    let submissionInfo = this.myRanking && this.myRanking.problems
        ? this.myRanking.problems[problemId]
        : null;
    return submissionInfo ? submissionInfo.incorrectSubmissions : 0;
  }
}

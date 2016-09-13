import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable, Subscription } from 'rxjs/Rx';

import {
  Competition,
  CompetitionScoreboardRanking,
  RepositoryService,
  TimeSpan
} from '../../../shared';

@Component({
  moduleId: module.id,
  selector: 'app-scoreboard',
  templateUrl: 'scoreboard.component.html',
  styleUrls: ['scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {
  ended: boolean;
  competition: Competition;
  rankings: CompetitionScoreboardRanking[];

  countdown: Subscription;

  constructor(
      private route: ActivatedRoute,
      private repoService: RepositoryService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let competitionId = params['id'];
      this.repoService
          .getCompetition(competitionId)
          .subscribe(competition => {
            this.competition = competition;
            if (new Date() < competition.endTime) {
              this.ended = false;
              Observable.timer(competition.endTime).subscribe(() => {
                this.ended = true;
              });
            } else {
              this.ended = true;
            }
          });
      this.repoService
          .getCompetitionScoreboard(competitionId)
          .subscribe(rankings => this.rankings = rankings);
    });
  }
}

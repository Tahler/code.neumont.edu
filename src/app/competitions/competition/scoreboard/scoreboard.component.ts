import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable, Subscription } from 'rxjs/Rx';

import { Competition, CompetitionScoreboardRanking } from '../../../shared/models/competition';
import { RepositoryService } from '../../../shared/firebase/repository.service';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit, OnDestroy {
  ended: boolean;
  competition: Competition;
  rankings: CompetitionScoreboardRanking[];

  countdownSubscription: Subscription;

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
              this.countdownSubscription = Observable.timer(competition.endTime).subscribe(() => {
                this.ended = true;
                this.countdownSubscription.unsubscribe();
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

  ngOnDestroy() {
    if (this.countdownSubscription) {
      this.countdownSubscription.unsubscribe();
    }
  }
}

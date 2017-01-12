import { Component, OnInit, Input } from '@angular/core';

import { RepositoryService } from '../../../shared/firebase/repository.service';
import { CompetitionScoreboardRanking } from '../../../shared/models/competition';

@Component({
  selector: 'app-scoreboard-preview',
  templateUrl: './scoreboard-preview.component.html',
  styleUrls: ['./scoreboard-preview.component.css']
})
export class ScoreboardPreviewComponent implements OnInit {
  @Input() competitionId: string;
  rankings: CompetitionScoreboardRanking[];

  constructor(private repoService: RepositoryService) { }

  ngOnInit() {
    this.repoService.getCompetitionScoreboard(this.competitionId)
        .subscribe(rankings => this.rankings = rankings);
  }
}

import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../shared/firebase/auth.service';
import { RepositoryService } from '../../shared/firebase/repository.service';
import { Competition } from '../../shared/models/competition';

@Component({
  selector: 'app-competition-list',
  templateUrl: './competition-list.component.html',
  styleUrls: ['./competition-list.component.css']
})
export class CompetitionListComponent implements OnInit {
  competitions: Competition[];
  showPastCompetitions = false;
  canCreateCompetition: boolean;

  constructor(
      private authService: AuthService,
      private repoService: RepositoryService) {}

  ngOnInit() {
    this.repoService
        .getAllCompetitions()
        .subscribe(competitions => this.competitions = competitions);
    this.authService.isNeumonter
        .subscribe(isNeumonter => this.canCreateCompetition = isNeumonter);
  }
}

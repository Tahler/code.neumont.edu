import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';
import { CollapseDirective } from 'ng2-bootstrap';
import { CompetitionProblem, RepositoryService } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'app-competition',
  templateUrl: 'competition.component.html',
  styleUrls: ['competition.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
    CollapseDirective
  ]
})
export class CompetitionComponent implements OnInit {
  listCollapsed = false;
  problems: CompetitionProblem[];

  constructor(
      private router: Router,
      private route: ActivatedRoute,
      private repoService: RepositoryService) { }

  ngOnInit() {
    let competitionId = this.route.snapshot.params['id'];
    this.repoService
        .getCompetitionProblems(competitionId)
        .subscribe(competitionProblems => {
          this.problems = competitionProblems;
          this.router.navigate([competitionProblems[0].$key], { relativeTo: this.route });
        });
  }
}

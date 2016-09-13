import { Component, OnInit } from '@angular/core';

import { ProblemPreviewComponent } from './problem-preview';
import { AuthService, Problem, RepositoryService } from '../../shared';

@Component({
  moduleId: module.id,
  selector: 'app-problem-list',
  templateUrl: 'problem-list.component.html',
  styleUrls: ['problem-list.component.css']
})
export class ProblemListComponent implements OnInit {
  problems: Problem[];
  canCreateProblem: boolean;
  query = '';

  constructor(
      private authService: AuthService,
      private repoService: RepositoryService) { }

  ngOnInit() {
    this.authService.isNeumonter
        .subscribe(isNeumonter => this.canCreateProblem = isNeumonter);
    this.repoService.getTopProblems(10)
        .subscribe(problems => this.problems = problems);
  }
}

import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../shared/firebase/auth.service';
import { RepositoryService } from '../../shared/firebase/repository.service';
import { Problem } from '../../shared/models/problem';

@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css']
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

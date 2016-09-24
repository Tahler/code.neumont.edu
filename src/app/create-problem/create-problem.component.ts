import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../shared/firebase/auth.service';
import { RepositoryService } from '../shared/firebase/repository.service';
import { Problem } from '../shared/models/problem';
import { TestCase } from '../shared/models/test-case';

@Component({
  selector: 'app-create-problem',
  templateUrl: 'create-problem.component.html',
  styleUrls: ['create-problem.component.css']
})
export class CreateProblemComponent implements OnInit {
  problem = new Problem();
  testCases = [new TestCase()];

  constructor(
      private router: Router,
      private authService: AuthService,
      private repoService: RepositoryService) { }

  ngOnInit() {
    // Set creator to the logged in user's uid
    this.authService.auth.take(1).subscribe(auth => this.problem.creatorUid = auth.uid);
  }

  create(): void {
    // TODO: show loading progress
    // TODO: potential bug with timing here.
    let problemId = this.repoService.createProblem(this.problem, this.testCases);
    this.router.navigate(['/problems', problemId]);
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/Rx';

import { RepositoryService, Submission } from '../../shared';
import { SharingService } from './shared';

@Component({
  moduleId: module.id,
  selector: 'app-problem',
  templateUrl: 'problem.component.html',
  styleUrls: ['problem.component.css'],
  // TODO: add in RC6
  // providers: [SharingService]
})
export class ProblemComponent implements OnInit, OnDestroy {
  problemName: string;
  problemSubscription: Subscription;

  constructor(
      private route: ActivatedRoute,
      private repoService: RepositoryService,
      private sharingService: SharingService) { }

  ngOnInit() {
    let problemId = this.route.snapshot.params['id'];

    // Anytime the problem service's problem changes, change the sharing service's.
    this.problemSubscription = this.repoService.getProblem(problemId).subscribe(
        problem => {
          this.problemName = problem.name;
          this.sharingService.problem = problem;
        });
  }

  ngOnDestroy() {
    if (this.problemSubscription) {
      this.problemSubscription.unsubscribe();
    }
  }
}

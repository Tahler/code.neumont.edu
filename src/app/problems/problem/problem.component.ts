import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/Rx';

import { RepositoryService } from '../../shared/firebase/repository.service';
import { SubmissionTemplateService } from '../../shared/submission-template/submission-template.service';
import { SharingService } from './shared';

@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.css']
})
export class ProblemComponent implements OnInit, OnDestroy {
  problemName: string;
  problemSubscription: Subscription;

  constructor(
      private route: ActivatedRoute,
      private repoService: RepositoryService,
      private templateService: SubmissionTemplateService,
      private sharingService: SharingService) { }

  ngOnInit() {
    let problemId = this.route.snapshot.params['id'];

    // Anytime the problem service's problem changes, change the sharing service's.
    this.problemSubscription = this.repoService.getProblem(problemId).subscribe(
        problem => {
          this.problemName = problem.name;
          this.sharingService.problem = problem;
        });
    // Load in the template
    this.templateService
        .getDefaultSubmission()
        .take(1)
        .subscribe(defaultSubmission => this.sharingService.submission = defaultSubmission);
  }

  ngOnDestroy() {
    if (this.problemSubscription) {
      this.problemSubscription.unsubscribe();
    }
  }
}

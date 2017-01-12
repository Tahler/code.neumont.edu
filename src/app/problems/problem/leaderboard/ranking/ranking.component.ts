import { Component, Input, OnInit } from '@angular/core';

import { RepositoryService } from '../../../../shared/firebase/repository.service';
import { SuccessfulSubmission } from '../../../../shared/models/results';
import { User } from '../../../../shared/models/user';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {
  @Input() rank: number;
  @Input() submission: SuccessfulSubmission;
  submitter: User;

  constructor(private repoService: RepositoryService) { }

  ngOnInit() {
    this.repoService.getUser(this.submission.submitterUid).subscribe(
        user => this.submitter = user);
  }
}

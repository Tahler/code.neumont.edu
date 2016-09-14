import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ModalModule } from 'ng2-bootstrap';

import { ProblemComponent } from './problem.component';
import { problemRouting } from './problem.routing';
import { ViewComponent } from './view';
import { MySubmissionsComponent } from './my-submissions';
import { LeaderboardComponent } from './leaderboard';
import { RankingComponent } from './leaderboard/ranking';
import { SharingService } from './shared';
import { FormattingModule, SubmissionTemplateModule } from '../../shared';
import { CodeEditorModule } from '../../code-editor';
import { SubmissionModule } from '../../submission-modal';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    ModalModule,

    FormattingModule,
    CodeEditorModule,
    SubmissionTemplateModule,
    SubmissionModule,
    problemRouting
  ],
  declarations: [
    ProblemComponent,
    ViewComponent,
    MySubmissionsComponent,
    LeaderboardComponent,
    RankingComponent
  ],
  providers: [SharingService],
  exports: [ProblemComponent]
})
export class ProblemModule { }

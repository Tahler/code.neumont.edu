import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CollapseModule } from 'ng2-bootstrap';

import { FormattingModule } from '../../shared/formatting/formatting.module';
import { CodeEditorModule } from '../../code-editor';
import { CountdownModule } from '../../countdown';
import { SubmissionModule } from '../../submission-modal';
import { CompetitionComponent } from './competition.component';
import { competitionRouting } from './competition.routing';
import { ProblemPreviewComponent } from './problem-preview';
import { ProblemViewComponent } from './problem-view';
import { ScoreboardPreviewComponent } from './scoreboard-preview';
import { ScoreboardComponent } from './scoreboard';
import { WaitingComponent } from './waiting';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    CollapseModule,

    FormattingModule,
    CodeEditorModule,
    CountdownModule,
    SubmissionModule,

    competitionRouting
  ],
  declarations: [
    CompetitionComponent,
    ProblemPreviewComponent,
    ProblemViewComponent,
    ScoreboardPreviewComponent,
    ScoreboardComponent,
    WaitingComponent
  ],
  exports: [
    CompetitionComponent,
    WaitingComponent
  ]
})
export class CompetitionModule { }

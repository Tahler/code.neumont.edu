import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollapseModule } from 'ng2-bootstrap';

import { FormattingModule } from '../../shared';
import { CompetitionComponent } from './competition.component';
import { competitionRouting } from './competition.routing';
import { ProblemPreviewComponent } from './problem-preview';
import { ScoreboardPreviewComponent } from './scoreboard-preview';
import { ScoreboardComponent } from './scoreboard';
import { WaitingComponent } from './waiting';

@NgModule({
  imports: [
    CommonModule,

    CollapseModule,

    FormattingModule,
    competitionRouting
  ],
  declarations: [
    CompetitionComponent,
    ProblemPreviewComponent,
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

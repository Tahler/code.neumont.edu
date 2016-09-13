import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CompetitionListComponent } from './competition-list.component';
import { competitionListRouting } from './competition-list.routing';
import { CompetitionPreviewComponent } from './competition-preview';
import { IncludePastCompetitionsPipe } from './include-past-competitions.pipe';
import { CountdownModule } from '../../countdown';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    CountdownModule,

    competitionListRouting
  ],
  declarations: [
    CompetitionListComponent,
    CompetitionPreviewComponent,
    IncludePastCompetitionsPipe
  ],
  exports: [CompetitionListComponent]
})
export class CompetitionListModule { }

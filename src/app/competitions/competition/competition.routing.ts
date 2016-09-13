import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompetitionComponent } from './competition.component';
import { WaitingComponent } from './waiting';
import { ScoreboardComponent } from './scoreboard';
import { ProblemViewComponent } from './problem-view';
import {
  CompetitionStartedGuard,
  CompetitionNotStartedGuard,
  LoggedInGuard,
  VerifiedGuard
} from '../../shared';

const competitionRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'countdown',
        component: WaitingComponent,
        canActivate: [CompetitionNotStartedGuard]
      },
      {
        path: 'scoreboard',
        component: ScoreboardComponent,
        canActivate: [CompetitionStartedGuard]
      },
      {
        path: '',
        component: CompetitionComponent,
        canActivate: [
          LoggedInGuard,
          VerifiedGuard,
          CompetitionStartedGuard
        ],
        children: [
          { path: '' },
          { path: ':problemId', component: ProblemViewComponent }
        ]
      }
    ]
  }
];

export const competitionRouting: ModuleWithProviders = RouterModule.forChild(competitionRoutes);

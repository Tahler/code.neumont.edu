import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompetitionComponent } from './competition.component';
import { WaitingComponent } from './waiting';
import { ScoreboardComponent } from './scoreboard';
import { ProblemViewComponent } from './problem-view';
import { CompetitionStartedGuard } from '../../shared/firebase/competition-started-guard.service';
import { CompetitionNotStartedGuard } from '../../shared/firebase/competition-not-started-guard.service';
import { LoggedInGuard } from '../../shared/firebase/logged-in-guard.service';
import { VerifiedGuard } from '../../shared/firebase/verified-guard.service';

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

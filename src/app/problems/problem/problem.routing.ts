import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProblemComponent } from './problem.component';
import { ViewComponent } from './view';
import { MySubmissionsComponent } from './my-submissions';
import { LeaderboardComponent } from './leaderboard';

const problemRoutes: Routes = [
  {
    path: '',
    component: ProblemComponent,
    children: [
      { path: '', component: ViewComponent },
      { path: 'my-submissions', component: MySubmissionsComponent },
      { path: 'leaderboard', component: LeaderboardComponent }
    ]
  }
];

export const problemRouting: ModuleWithProviders = RouterModule.forChild(problemRoutes);

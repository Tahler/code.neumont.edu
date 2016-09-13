import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompetitionListComponent } from './competition-list.component';

const competitionListRoutes: Routes = [
  { path: '', component: CompetitionListComponent },
];

export const competitionListRouting: ModuleWithProviders =
    RouterModule.forChild(competitionListRoutes);

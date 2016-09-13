import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateProblemComponent } from './create-problem.component';
import { IsNeumonterGuard } from '../shared';

const createProblemRoutes: Routes = [
  {
    path: '',
    component: CreateProblemComponent,
    canActivate: [IsNeumonterGuard]
  }
];

export const createProblemRouting: ModuleWithProviders = RouterModule.forChild(createProblemRoutes);

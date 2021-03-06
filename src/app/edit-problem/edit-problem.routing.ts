import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditProblemComponent } from './edit-problem.component';
import { CanEditProblemGuard } from '../shared/firebase/can-edit-problem-guard.service';

const editProblemRoutes: Routes = [
  {
    path: '',
    component: EditProblemComponent,
    canActivate: [CanEditProblemGuard]
  }
];

export const editProblemRouting: ModuleWithProviders = RouterModule.forChild(editProblemRoutes);

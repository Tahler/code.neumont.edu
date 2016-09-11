import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProblemListComponent } from './problem-list.component';

const problemListRoutes: Routes = [
  { path: '', component: ProblemListComponent },
];

export const problemListRouting: ModuleWithProviders = RouterModule.forChild(problemListRoutes);

import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResetPasswordComponent } from './reset-password.component';
import { NotLoggedInGuard } from '../shared';

const resetPasswordRoutes: Routes = [
  {
    path: '',
    component: ResetPasswordComponent,
    canActivate: [NotLoggedInGuard]
  }
];

export const resetPasswordRouting: ModuleWithProviders = RouterModule.forChild(resetPasswordRoutes);

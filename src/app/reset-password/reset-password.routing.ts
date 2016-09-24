import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResetPasswordComponent } from './reset-password.component';
import { NotLoggedInGuard } from '../shared/firebase/not-logged-in-guard.service';

const resetPasswordRoutes: Routes = [
  {
    path: '',
    component: ResetPasswordComponent,
    canActivate: [NotLoggedInGuard]
  }
];

export const resetPasswordRouting: ModuleWithProviders = RouterModule.forChild(resetPasswordRoutes);

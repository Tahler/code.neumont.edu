import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginRequiredComponent } from './login-required.component';
import { NotLoggedInGuard } from '../shared/firebase/not-logged-in-guard.service';

const loginRoutes: Routes = [
  {
    path: '',
    component: LoginRequiredComponent,
    canActivate: [NotLoggedInGuard]
  }
];

export const loginRouting: ModuleWithProviders = RouterModule.forChild(loginRoutes);

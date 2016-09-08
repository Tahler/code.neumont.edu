import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './';
import { NotLoggedInGuard } from '../shared';

const registerRoutes: Routes = [
  {
    path: '',
    component: RegisterComponent,
    canActivate: [NotLoggedInGuard]
  }
];

export const registerRouteProviders: any[] = [
  NotLoggedInGuard
];

export const registerRouting: ModuleWithProviders = RouterModule.forChild(registerRoutes);

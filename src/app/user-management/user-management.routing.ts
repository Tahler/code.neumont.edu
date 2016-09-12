import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserManagementComponent } from './';

const userManagementRoutes: Routes = [
  { path: '', component: UserManagementComponent }
];

export const userManagementRouting: ModuleWithProviders =
    RouterModule.forChild(userManagementRoutes);

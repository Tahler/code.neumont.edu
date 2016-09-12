import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found';

const problemsRoutes: Routes = [
  { path: 'problems', loadChildren: 'app/problems/problem-list/problem-list.module#ProblemListModule' },
  { path: 'problems/:id', loadChildren: 'app/problems/problem/problem.module#ProblemModule' }
];

const appRoutes: Routes = [
  { path: '', loadChildren: 'app/home/home.module#HomeModule' },
  { path: 'register', loadChildren: 'app/register/register.module#RegisterModule' },
  { path: 'usermgmt', loadChildren: 'app/user-management/user-management.module#UserManagementModule' },
  { path: 'verification-required', loadChildren: 'app/verification-required/verification-required.module#VerificationRequiredModule' },
  ...problemsRoutes,
  { path: '**', component: PageNotFoundComponent }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

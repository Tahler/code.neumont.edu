import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found';

const problemsRoutes: Routes = [
  { path: 'problems', loadChildren: 'app/problems/problem-list/problem-list.module#ProblemListModule' },
  { path: 'problems/:id', loadChildren: 'app/problems/problem/problem.module#ProblemModule' }
];

const competitionsRoutes: Routes = [
  { path: 'competitions', loadChildren: 'app/competitions/competition-list/competition-list.module#CompetitionListModule' },
  { path: 'competitions/:id', loadChildren: 'app/competitions/competition/competition.module#CompetitionModule' }
];

const appRoutes: Routes = [
  { path: '', loadChildren: 'app/home/home.module#HomeModule' },
  { path: 'edit-profile/:id', loadChildren: 'app/edit-profile/edit-profile.module#EditProfileModule' },
  { path: 'login-required', loadChildren: 'app/login-required/login-required.module#LoginRequiredModule' },
  { path: 'profiles/:id', loadChildren: 'app/profile/profile.module#ProfileModule' },
  { path: 'register', loadChildren: 'app/register/register.module#RegisterModule' },
  { path: 'reset-password', loadChildren: 'app/reset-password/reset-password.module#ResetPasswordModule' },
  { path: 'usermgmt', loadChildren: 'app/user-management/user-management.module#UserManagementModule' },
  { path: 'verification-required', loadChildren: 'app/verification-required/verification-required.module#VerificationRequiredModule' },
  ...problemsRoutes,
  ...competitionsRoutes,
  { path: '**', component: PageNotFoundComponent }
];


export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

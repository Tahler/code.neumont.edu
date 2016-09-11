import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const homeRoutes: Routes = [
  { path: '', loadChildren: 'app/home/home.module#HomeModule' }
];

const registerRoutes: Routes = [
  { path: 'register', loadChildren: 'app/register/register.module#RegisterModule' }
];

const problemsRoutes: Routes = [
  {
    path: 'problems',
    loadChildren: 'app/problems/problem-list/problem-list.module#ProblemListModule'
  },
  { path: 'problems/:id', loadChildren: 'app/problems/problem/problem.module#ProblemModule' }
];

const appRoutes: Routes = [
  ...homeRoutes,
  ...registerRoutes,
  ...problemsRoutes
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const problemsRoutes: Routes = [
  {
    path: 'problems',
    loadChildren: 'app/problems/problem-list/problem-list.module#ProblemListModule'
  },
  { path: 'problems/:id', loadChildren: 'app/problems/problem/problem.module#ProblemModule' }
];

const appRoutes: Routes = [
  { path: '', loadChildren: 'app/home/home.module#HomeModule' },
  { path: 'register', loadChildren: 'app/register/register.module#RegisterModule' },
  ...problemsRoutes
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const homeRoutes: Routes = [
  { path: '', loadChildren: 'app/home/home.module#HomeModule' }
];

const registerRoutes: Routes = [
  { path: 'register', loadChildren: 'app/register/register.module#RegisterModule' }
];

const appRoutes: Routes = [
  ...homeRoutes,
  ...registerRoutes
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

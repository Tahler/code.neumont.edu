import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './profile.component';

const profileRoutes: Routes = [
  { path: '', component: ProfileComponent }
];

export const profileRouting: ModuleWithProviders = RouterModule.forChild(profileRoutes);

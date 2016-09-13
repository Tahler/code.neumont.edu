import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditProfileComponent } from './edit-profile.component';
import { IsMyProfileGuard } from '../shared';

const editProfileRoutes: Routes = [
  {
    path: '',
    component: EditProfileComponent,
    canActivate: [IsMyProfileGuard]
  }
];

export const editProfileRouting: ModuleWithProviders = RouterModule.forChild(editProfileRoutes);

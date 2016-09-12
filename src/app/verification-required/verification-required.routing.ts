import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VerificationRequiredComponent } from './';
import { NotVerifiedGuard } from './not-verified-guard.service';

const verificationRoutes: Routes = [
  {
    path: '',
    component: VerificationRequiredComponent,
    canActivate: [NotVerifiedGuard]
  }
];

export const verificationRouting: ModuleWithProviders = RouterModule.forChild(verificationRoutes);

export const verificationRoutingProviders: any[] = [NotVerifiedGuard];

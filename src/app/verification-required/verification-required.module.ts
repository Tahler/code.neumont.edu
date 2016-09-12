import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerificationRequiredComponent } from './verification-required.component';
import { verificationRouting, verificationRoutingProviders } from './verification-required.routing';
import { NotVerifiedGuard } from './not-verified-guard.service';

@NgModule({
  imports: [verificationRouting],
  declarations: [VerificationRequiredComponent],
  providers: [verificationRoutingProviders],
  exports: [VerificationRequiredComponent]
})
export class VerificationRequiredModule { }

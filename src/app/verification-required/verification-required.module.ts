import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerificationRequiredComponent } from './verification-required.component';
import { verificationRouting } from './verification-required.routing';
import { NotVerifiedGuard } from '../shared';

@NgModule({
  imports: [verificationRouting],
  declarations: [VerificationRequiredComponent],
  exports: [VerificationRequiredComponent]
})
export class VerificationRequiredModule { }

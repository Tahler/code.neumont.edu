import { NgModule } from '@angular/core';

import { VerificationRequiredComponent } from './verification-required.component';
import { verificationRouting } from './verification-required.routing';

@NgModule({
  imports: [verificationRouting],
  declarations: [VerificationRequiredComponent],
  exports: [VerificationRequiredComponent]
})
export class VerificationRequiredModule { }

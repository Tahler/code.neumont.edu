import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ResetPasswordComponent } from './reset-password.component';
import { resetPasswordRouting } from './reset-password.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    resetPasswordRouting
  ],
  declarations: [ResetPasswordComponent],
  exports: [ResetPasswordComponent]
})
export class ResetPasswordModule { }

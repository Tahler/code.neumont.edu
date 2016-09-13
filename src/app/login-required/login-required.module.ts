import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRequiredComponent } from './login-required.component';
import { loginRouting } from './login-required.routing';

@NgModule({
  imports: [loginRouting],
  declarations: [LoginRequiredComponent],
  exports: [LoginRequiredComponent]
})
export class LoginRequiredModule { }

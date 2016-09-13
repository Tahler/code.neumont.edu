import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ModalModule } from 'ng2-bootstrap';

import { LoginModalComponent } from './login-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ModalModule
  ],
  declarations: [LoginModalComponent],
  exports: [LoginModalComponent]
})
export class LoginModalModule { }

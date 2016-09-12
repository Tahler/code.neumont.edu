import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { UserManagementComponent } from './user-management.component';
import { userManagementRouting } from './user-management.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    userManagementRouting
  ],
  declarations: [UserManagementComponent],
  exports: [UserManagementComponent]
})
export class UserManagementModule { }

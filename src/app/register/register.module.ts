import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ModalModule } from 'ng2-bootstrap';

import { RegisterComponent } from './register.component';
import { registerRouting, registerRouteProviders } from './register.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ModalModule,
    registerRouting
  ],
  declarations: [RegisterComponent],
  providers: [registerRouteProviders],
  exports: [RegisterComponent]
})
export class RegisterModule { }

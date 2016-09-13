import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar.component';
import { AuthAreaComponent } from './auth-area/auth-area.component';
import { FirebaseModule } from '../shared';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    FirebaseModule
  ],
  declarations: [
    NavbarComponent,
    AuthAreaComponent
  ],
  exports: [NavbarComponent]
})
export class NavbarModule { }

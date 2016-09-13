import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routing';
import { LoginModalModule } from './login-modal';
import { NavbarModule } from './navbar';
import { PageNotFoundModule } from './page-not-found';
import { FirebaseModule, LoginModalService } from './shared';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,

    FirebaseModule,
    routing,

    NavbarModule,
    LoginModalModule,
    PageNotFoundModule
  ],
  declarations: [AppComponent],
  providers: [
    appRoutingProviders,
    LoginModalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

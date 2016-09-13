import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';

import { AuthService } from './auth.service';
import { RepositoryService } from './repository.service';
import { CanEditProblemGuard } from './can-edit-problem-guard.service';
import { CompetitionStartedGuard } from './competition-started-guard.service';
import { CompetitionNotStartedGuard } from './competition-not-started-guard.service';
import { IsMyProfileGuard } from './is-my-profile-guard.service';
import { IsNeumonterGuard } from './is-neumonter-guard.service';
import { LoggedInGuard } from './logged-in-guard.service';
import { NotLoggedInGuard } from './not-logged-in-guard.service';
import { VerifiedGuard } from './verified-guard.service';

export const firebaseConfig = {
  apiKey: 'AIzaSyBJeW4SZUNUySEHd7GLc1qwBxsNLgN2a8Y',
  authDomain: 'nu-code-350ea.firebaseapp.com',
  databaseURL: 'https://nu-code-350ea.firebaseio.com',
  storageBucket: 'nu-code-350ea.appspot.com',
};

@NgModule({
  imports: [
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
    AuthService,
    RepositoryService,

    CanEditProblemGuard,
    CompetitionStartedGuard,
    CompetitionNotStartedGuard,
    IsMyProfileGuard,
    IsNeumonterGuard,
    LoggedInGuard,
    NotLoggedInGuard,
    VerifiedGuard
  ]
})
export class FirebaseModule { }

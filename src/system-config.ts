declare var System: any;

System.config({
  map: {
    'app': 'app',

    '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
    '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
    '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
    '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
    '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
    '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
    '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
    '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',

    'rxjs': 'vendor/rxjs',

    'jquery': 'npm:jquery/dist/jquery.min.js',
    'bootstrap': 'npm:bootstrap/dist/js/bootstrap.min.js',

    'firebase': 'npm:firebase/firebase.js',
    'angularfire2': 'vendor/angularfire2',

    'moment': 'npm:moment/moment.js',
    'ng2-bootstrap': 'vendor/ng2-bootstrap',

    'showdown': 'npm:showdown/dist/showdown.js',
    'codemirror': 'vendor/codemirror'
  },
  packages: {
    'app': {
      main: './main.js',
      defaultExtension: 'js'
    },

    'rxjs': {
      defaultExtension: 'js'
    },

    'angularfire2': {
      defaultExtension: 'js',
      main: 'angularfire2.js'
    },
    'ng2-bootstrap': {
      defaultExtension: 'js',
      main: 'ng2-bootstrap.js'
    },
    'codemirror': {
      defaultExtension: 'js',
      main: 'lib/codemirror.js'
    }
  }
});

const barrels: string[] = [
  // 'app',
  'app/code-editor',
  'app/code-editor/code-mirror',
  'app/code-editor/language-dropdown',
  'app/competitions',
  'app/competitions/competition',
  'app/competitions/competition/problem-preview',
  'app/competitions/competition/problem-view',
  'app/competitions/competition/scoreboard',
  'app/competitions/competition/scoreboard-preview',
  'app/competitions/competition/waiting',
  'app/competitions/competition-list',
  'app/competitions/competition-list/competition-preview',
  'app/countdown',
  'app/create-problem',
  'app/edit-problem',
  'app/edit-problem-form',
  'app/edit-profile',
  'app/home',
  'app/login-modal',
  'app/login-required',
  'app/navbar',
  'app/navbar/auth-area',
  'app/page-not-found',
  'app/problems',
  'app/problems/problem',
  'app/problems/problem/leaderboard',
  'app/problems/problem/leaderboard/ranking',
  'app/problems/problem/my-submissions',
  'app/problems/problem/shared',
  'app/problems/problem/view',
  'app/problems/problem-list',
  'app/problems/problem-list/problem-preview',
  'app/profile',
  'app/register',
  'app/reset-password',
  'app/shared',
  'app/shared/firebase',
  'app/shared/formatting',
  'app/shared/guards',
  'app/shared/models',
  'app/shared/submission-template',
  'app/submission-modal',
  'app/user-management',
  'app/verification-required'
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

System.config({
  paths: {
    'npm:': 'https://unpkg.com/'
  },
  packages: cliSystemConfigPackages
});

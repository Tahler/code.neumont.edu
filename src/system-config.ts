declare var System: any;

System.config({
  map: {
    'app': 'app',

    // '@angular/core': 'vendor/@angular/core/bundles/core.umd.js',
    // '@angular/common': 'vendor/@angular/common/bundles/common.umd.js',
    // '@angular/compiler': 'vendor/@angular/compiler/bundles/compiler.umd.js',
    // '@angular/platform-browser': 'vendor/@angular/platform-browser/bundles/platform-browser.umd.js',
    // '@angular/platform-browser-dynamic': 'vendor/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
    // '@angular/http': 'vendor/@angular/http/bundles/http.umd.js',
    // '@angular/router': 'vendor/@angular/router/bundles/router.umd.js',
    // '@angular/forms': 'vendor/@angular/forms/bundles/forms.umd.js',

    'rxjs': 'vendor/rxjs',

    'jquery': 'vendor/jquery/dist/jquery.min.js',
    'bootstrap': 'vendor/bootstrap/dist/js/bootstrap.min.js',

    'firebase': 'vendor/firebase/firebase.js',
    'angularfire2': 'vendor/angularfire2',

    'angular2-fontawesome': 'vendor/angular2-fontawesome',

    'moment': 'vendor/moment/moment.js',
    'ng2-bootstrap': 'vendor/ng2-bootstrap',

    'showdown': 'vendor/showdown/dist/showdown.js',
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
    'angular2-fontawesome': {
      defaultExtension: 'js'
    },
    'codemirror': {
      defaultExtension: 'js',
      main: 'lib/codemirror.js'
    }
  }
});

const barrels: string[] = [
    // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/forms',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // 'app',
  'app/code-editor',
  'app/code-editor/code-mirror',
  'app/code-editor/language-dropdown',
  'app/competition',
  'app/competition-list',
  'app/competition-list/competition-preview',
  'app/competition/problem-preview',
  'app/competition/problem-view',
  'app/competition/scoreboard',
  'app/competition/scoreboard-preview',
  'app/competition/waiting',
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
  'app/shared/guards',
  'app/shared/models',
  'app/shared/pipes',
  'app/shared/services',
  'app/submission-modal',
  'app/user-management',
  'app/verification-required'
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

System.config({
  map: {
    '@angular': 'vendor/@angular'
  },
  packages: cliSystemConfigPackages
});

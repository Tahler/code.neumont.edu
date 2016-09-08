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
  'app/shared',
  'app/shared/guards',
  'app/shared/models',
  'app/shared/pipes',
  'app/shared/services',
  'app/problem-list',
  'app/problem-list/problem-preview',
  'app/competition-list',
  'app/home',
  'app/problem',
  'app/problem/shared',
  'app/submission-modal',
  'app/code-editor',
  'app/code-editor/language-dropdown',
  'app/login-modal',
  'app/navbar',
  'app/navbar/auth-area',
  'app/register',
  'app/problem/view',
  'app/problem/my-submissions',
  'app/problem/leaderboard',
  'app/problem/leaderboard/ranking',
  'app/profile',
  'app/edit-profile',
  'app/login-required',
  'app/verification-required',
  'app/user-management',
  'app/create-problem',
  'app/edit-problem',
  'app/edit-problem-form',
  'app/reset-password',
  'app/competition',
  'app/competition/waiting',
  'app/competition/problem-view',
  'app/competition-list/competition-preview',
  'app/competition/scoreboard-preview',
  'app/competition/scoreboard',
  'app/page-not-found',
  'app/countdown',
  'app/code-editor/code-mirror',
  'app/competition/problem-preview',
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

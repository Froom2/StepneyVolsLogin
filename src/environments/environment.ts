// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDnIIik9jkmHofGF_sN0zHOksHLZdOJWFA',
    authDomain: 'stepneylogin.firebaseapp.com',
    databaseURL: 'https://stepneylogin.firebaseio.com',
    projectId: 'stepneylogin',
    storageBucket: 'stepneylogin.appspot.com',
    messagingSenderId: '593835618583'
  }
};

/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ember-on-rails5',
    podModulePrefix: 'ember-on-rails5/pods',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    'ember-devtools': {
      global: true,
      enabled: environment === 'development'
    },
    'ember-simple-auth': {
      authenticationRoute: 'sessions.new',
      routeAfterAuthentication: 'index',
      routeIfAlreadyAuthenticated: 'index'
    },
  };

  if (environment === 'development') {
    ENV.APP.API_HOST = process.env.API_HOST;
    ENV.APP.API_NAMESPACE = process.env.API_NAMESPACE;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.APP.API_HOST = process.env.API_HOST;
    ENV.APP.API_NAMESPACE = process.env.API_NAMESPACE;
  }

  return ENV;
};

/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'repo-frontend',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    URL_API_BACKEND: 'http://devel.huayragnulinux.com.ar:8081',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    ENV['ember-cli-mirage'] = {
      enabled: true
    }
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
    ENV.locationType = 'hash';
    ENV.rootURL = '/';

    ENV['ember-cli-mirage'] = {
      enabled: false
    }
  }

  return ENV;
};

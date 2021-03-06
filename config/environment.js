/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'myapp',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    local_couchdb_instance: 'bloggr',
    online_couchdb_instance: 'http://localhost:5984/bloggr',
    contentSecurityPolicy: {
      'connect-src': "'self' http://localhost:5984 http://0.0.0.0:5984"
    },

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
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

	if (environment === 'production') {
	  ENV.baseURL = '/bloggrcouch/';
	  ENV.online_couchdb_instance = 'http://martinic.iriscouch.com:5984/bloggr';
    ENV.contentSecurityPolicy = {
      'connect-src': "'self' http://martinic.iriscouch.com:5984"
    };
  }
  return ENV;
};

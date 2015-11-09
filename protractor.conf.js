// See https://github.com/angular/protractor/blob/master/docs/referenceConf.js

exports.config = {
  // ---- 4. To connect directly to Drivers ------------------------------------
  // Boolean. If true, Protractor will connect directly to the browser Drivers
  // at the locations specified by chromeDriver and firefoxPath. Only Chrome
  // and Firefox are supported for direct connect.
  directConnect: false,

  // Spec patterns are relative to the location of this config.
  specs: [
    'spec/*spec.js'
  ],

  capabilities: {
    browserName: 'chrome'
  },

    // A base URL for your application under test. Calls to protractor.get()
  // with relative paths will be prepended with this.
  baseUrl: 'http://localhost:9000/testapp/',

  // The timeout in milliseconds for each script run on the browser. This should
  // be longer than the maximum time your application needs to stabilize between
  // tasks.
  allScriptsTimeout: 11000,

  framework: 'jasmine2',

  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 11000
  }
};

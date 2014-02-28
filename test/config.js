module.exports = function(config) {
  config.set({
    basePath: '..',

    frameworks: ['jasmine'],

    files: [
      JASMINE,
      JASMINE_ADAPTER,
      'vendor/underscore.js',
      'src/*.js',
      'test/*.spec.js'
    ],

    port: 10001,
    runnerPort: 10002,

    browsers: ['Chrome'],

    singleRun: true
  });

};

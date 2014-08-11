module.exports = function(config) {
  config.set({
    basePath: '..',

    frameworks: ['jasmine'],
    port: 10001,
    runnerPort: 10002,

    browsers: ['PhantomJS'],

    singleRun: true
  });

};

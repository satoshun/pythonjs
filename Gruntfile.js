'use strict';

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  grunt.initConfig({
    project: {
      app: 'src',
      test: 'test'
    },
    karma: {
      watch: {
        configFile: '<%= project.test %>/config.js',
        autoWatch: true,
        singleRun: false
      },
      build: {
        configFile: '<%= project.test %>/config.js',
        singleRun: true
      }
    }
  });

  grunt.registerTask('test', [
    'karma:build'
  ]);
};

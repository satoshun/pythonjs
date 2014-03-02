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
    },
    concat: {
      dist: {
        src: [
          '<%= project.app %>/*.js'
        ],
        dest: 'pythonjs.js'
      }
    },
    uglify: {
      dist: {
        files: {
          'pythonjs.min.js': ['pythonjs.js']
        }
      }
    }
  });

  grunt.registerTask('test', [
    'karma:build'
  ]);

  grunt.registerTask('build', [
    'concat:dist',
    'uglify:dist'
  ]);
};

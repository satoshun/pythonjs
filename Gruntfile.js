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
        dest: 'compat_py.js'
      }
    },
    uglify: {
      dist: {
        files: {
          'compat_py.min.js': ['compat_py.js']
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

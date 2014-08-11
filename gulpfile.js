'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var testFiles = [
  'vendor/underscore.js',
  'src/*.js',
  'test/*.spec.js'
];

gulp.task('build', function() {
  return gulp.src('./src/*.js')
    .pipe($.concat('python.js'))
    .pipe(gulp.dest('./'))
    .pipe($.uglify())
    .pipe($.rename(function(path) {
      path.extname = '.min.js';
    }))
    .pipe(gulp.dest('./'));
});


gulp.task('test', function() {
  return gulp.src(testFiles)
    .pipe($.karma({
      configFile: 'karma.conf.js',
      action: 'run'
    }))
    .on('error', function() {});
});


gulp.task('watch-test', function() {
  gulp.watch("src/*.js", ["test"]);
});

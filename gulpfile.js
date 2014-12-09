var gulp = require('gulp');
var jasmine = require('gulp-jasmine');
var jshint = require('gulp-jshint');
// Lint JS
gulp.task('lint', function() {
  return gulp.src('src/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// Watch Our Files
gulp.task('watch', function() {
  gulp.watch('src/*.js', ['lint']);
});

// test
gulp.task('test', function() {
  return gulp.src('spec/test.js')
    .pipe(jasmine());
});

// Default
gulp.task('default', ['lint', 'watch']);

var gulp = require('gulp');
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

// Default
gulp.task('default', ['lint', 'watch']);

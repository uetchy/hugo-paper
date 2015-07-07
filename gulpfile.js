var gulp = require('gulp');

gulp.task('autoprefixer', function() {
  var postcss      = require('gulp-postcss');
  var sourcemaps   = require('gulp-sourcemaps');
  var autoprefixer = require('autoprefixer-core');

  return gulp.src('./src/styles/*.css')
    .pipe(sourcemaps.init())
    .pipe(postcss([ autoprefixer({ browsers: ['last 2 version'] }) ]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./static/css'));
});

gulp.task('watch', function() {
  gulp.watch('src/styles/*.css', ['autoprefixer'])
});

gulp.task('build', ['autoprefixer']);

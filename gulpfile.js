const gulp = require('gulp'),
      pug = require('gulp-pug'),
      rename = require('gulp-rename'),
      webpack = require('webpack-stream'),
      sass = require('gulp-sass');

gulp.task('slides', function () {
  return gulp.src('src/template/slides.pug')
    .pipe(pug())
    .pipe(rename('index.html'))
    .pipe(gulp.dest('public/'));
});

gulp.task('styles', function () {
  return gulp.src('src/sass/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('public/'));
});

gulp.task('scripts', function () {
  return gulp.src('src/scripts/**/*.js')
    .pipe(webpack({ output: { filename: 'main.js' } }))
    .pipe(gulp.dest('public/'));
});

gulp.task('assets', function () {
  return gulp.src('assets/**')
    .pipe(gulp.dest('public/assets/'));
});

gulp.task('default', [
  'slides',
  'styles',
  'scripts',
  'assets'
]);

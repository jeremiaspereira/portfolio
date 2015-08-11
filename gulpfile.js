'use strict';

//Type: String Default: nested Values: nested, expanded, compact, compressed

var gulp        = require('gulp');
var sass        = require('gulp-sass');
var browserSync = require('browser-sync');

gulp.task('site-reload', function () {
  browserSync.reload();
});

gulp.task('browser-sync', ['site-reload'], function() {
  browserSync({
    server: {
      baseDir: ''
    }
  });
});

gulp.task('sass', function () {
  gulp.src('src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
     //.pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('assets/css/'));
});

gulp.task('copy-to-assets', function(){
  gulp.src('node_modules/font-awesome/css/*')
    .pipe(gulp.dest('assets/font-awesome/css'));

  gulp.src('node_modules/font-awesome/fonts/*')
    .pipe(gulp.dest('assets/font-awesome/fonts'));
});

gulp.task('sass:watch', function () {
  gulp.watch('src/sass/*.scss', ['sass']);
  gulp.watch(['index.html', 'assets/css/*.css'], ['site-reload']);
});

gulp.task('default', ['sass:watch', 'browser-sync']);
var gulp                    = require('gulp'),
    sass                    = require('gulp-sass'),
    concat                  = require('gulp-concat'),
    autoprefixer            = require('gulp-autoprefixer'),
    minifyCss               = require('gulp-cssnano'),
    runSequence             = require('run-sequence'),
    clean                   = require('gulp-clean'),
    sourcemaps              = require('gulp-sourcemaps'),

    // Gulp If
    // @link https://github.com/robrich/gulp-if
    _if                     = require('gulp-if'),
    development             = true;

// Clean
gulp.task('clean-all', function () {
  return gulp.src([
      '**/.DS_Store',
      './css/*',
      './maps'
    ], {read: false})
    .pipe(clean());
});

// Styles
gulp.task('styles', function() {
  return gulp.src([
    './scss/main.scss'
  ])
    .pipe(_if(development, sourcemaps.init())) //adds sourcemaps for developer
      .pipe(sass())
      .pipe(autoprefixer({
          browsers: ['last 2 versions', 'ie 9', 'android 4', 'opera 12'],
          cascade: false,
          zindex: true
      }))
      .pipe(_if(!development, minifyCss({
        discardComments: {removeAll: true},
        compatibility: 'ie8',
        zindex: false
      }))) //disable minifyCss for developer
    .pipe(_if(development, sourcemaps.write('../maps'))) //adds sourcemaps for developer
    .pipe(gulp.dest('./css'))
});

// Watch
gulp.task('watch', function() {
  gulp.watch('./scss/**/*.scss', ['styles']);
});

// Build
gulp.task('build', function(callback) {

  // Gulp If
  // remove sourcemaps for developer. This task them for the production site
  development = false;

  runSequence(
    'styles',
    callback);
});

// Default
gulp.task('default', ['clean-all'], function() {
  gulp.start('build');
});

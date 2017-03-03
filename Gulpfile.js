var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var uglifycss = require('gulp-uglifycss');
var concat = require('gulp-concat');

var sassOptions = {};
var sourceMapOptions = {};
var autoprefixerOptions = {
  browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};

gulp.task('build', function() {
    gulp.src('src/**/*.scss')
      .pipe(sourcemaps.init())
      .pipe(sass(sassOptions).on('error', sass.logError))
      .pipe(sourcemaps.write(sourceMapOptions))
      .pipe(autoprefixer(autoprefixerOptions))
      .pipe(gulp.dest('dist'))
      .pipe(uglifycss({
        uglyComments: false
      }))
      .pipe(concat('ui-grid-custom.min.css'))
      .pipe(gulp.dest('./dist/'));
});

//Watch task
gulp.task('default',function() {
    gulp.watch('src/**/*.scss',['build']);
});

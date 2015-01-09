/*
|-------------------------------------------------------------------------------
| Packages
|-------------------------------------------------------------------------------
|
*/

var gulp = require('gulp'),
    less = require('gulp-less'),
    watch = require('gulp-watch'),
    concat = require('gulp-concat')
    uglify = require('gulp-uglify'),
    minifyCSS = require('gulp-minify-css'),
    autoprefixer = require('gulp-autoprefixer');


/*
|-------------------------------------------------------------------------------
| File destination
|-------------------------------------------------------------------------------
|
*/

var path = {
  css_dest: 'css',
  js_dest: 'js',
  less_build: 'less/build/**/*.less',
  less_vendor: 'less/vendor/**/*.less',
  js_build: 'js/build/**/*.js',
  js_vendor: 'js/vendor/**/.js'
};


/*
|-------------------------------------------------------------------------------
| JS Tasks
|-------------------------------------------------------------------------------
|
*/

gulp.task('js_vendor', function() {
  gulp.src(path.js_vendor)
    .pipe(uglify())
    .pipe(concat('vendor.min.js'))
    .pipe(gulp.dest(path.js_dest));
});

gulp.task('js_task', function() {
  gulp.src(path.js_build)
    .pipe(uglify())
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest(path.js_dest));
});

 
/*
|-------------------------------------------------------------------------------
| CSS Tasks
|-------------------------------------------------------------------------------
|
*/

gulp.task('less_vendor', function() {
  gulp.src(path.less_vendor)
    .pipe(less())
    .pipe(concat('vendor.min.css'))
    .pipe(autoprefixer())
    .pipe(minifyCSS())
    .pipe(gulp.dest('css'));
});

gulp.task('less_task', function() {
  gulp.src(path.less_build)
    .pipe(less())
    .pipe(concat('styles.min.css'))
    .pipe(autoprefixer())
    .pipe(minifyCSS())
    .pipe(gulp.dest('css'));
});

/*
|-------------------------------------------------------------------------------
| Watch
|-------------------------------------------------------------------------------
|
*/


gulp.task('watch', function() {
  gulp.run('less_vendor');
  gulp.run('js_vendor');

  gulp.watch(path.less_build, ['css_task']);
  gulp.watch(path.js_build, ['js_task']);
});
 
gulp.task('default', ['watch']);


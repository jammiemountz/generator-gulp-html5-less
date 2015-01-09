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
  css_dest: 'app/css',
  js_dest: 'app/js',
  css_src: 'app/css/src/**/*.less',
  css_vendor: 'app/css/vendor/**/*.less',
  js_src: 'app/js/src/**/*.js',
  js_vendor: 'app/js/vendor/**/.js'
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
  gulp.src(path.js_src)
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

gulp.task('css_vendor', function() {
  gulp.src(path.css_vendor)
    .pipe(less())
    .pipe(concat('vendor.min.css'))
    .pipe(autoprefixer())
    .pipe(minifyCSS())
    .pipe(gulp.dest(path.css_dest));
});

gulp.task('css_task', function() {
  gulp.src(path.css_src)
    .pipe(less())
    .pipe(concat('styles.min.css'))
    .pipe(autoprefixer())
    .pipe(minifyCSS())
    .pipe(gulp.dest(path.css_dest));
});

/*
|-------------------------------------------------------------------------------
| Watch
|-------------------------------------------------------------------------------
|
*/


gulp.task('watch', function() {
  gulp.run('css_vendor');
  gulp.run('js_vendor');

  gulp.watch(path.css_src, ['css_task']);
  gulp.watch(path.js_src, ['js_task']);
});
 
gulp.task('default', ['watch']);


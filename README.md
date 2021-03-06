# gulp-html5-less with Gulpjs Generator

Generator allows you to easily manage dependencies and compile and minimize all CSS and Javascript files. The generator can be easily linked to the Bower components.

All dependencies are kept in a file gulpfile.js, we do not have to worry about loading the vendor files. This improves page load performance by reducing the amount of files loaded css / js.

### Getting started

To install generator-gulp-html5-less from npm, run:

```bash
npm install -g generator-gulp-html5-less
```

Finally, initiate the generator:

```bash
yo gulp-html5-less
```

To run Gulpjs type in terminal:
```bash
gulp
```

### Default frameworks and plugins
- Bootstrap
- jQuery

### If you want to add new dependencies

**Install your library with bower**
Example: bower install angularjs

**Then you can add path to gulp.js**
```javascript
var bower_path = {  
  css: [
    "public/css/vendor/**/*.less",
  ],
  js: [
    "public/js/vendor/**/*.less",
    "bower_components/angular/angular.min.js",
  ]
};
```

### Project structure preview

```bash
app/css/src
app/css/vendor
app/fonts
app/icons
app/images
app/js/src
app/js/vendor
app/index.html
.gitignore
bower.json
gulpfile.js
package.json
```

## License

MIT

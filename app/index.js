'use strict';

var yeoman = require('yeoman-generator');
var yosay  = require('yosay');

module.exports = yeoman.generators.Base.extend({
  options: {
    npm: false
  },

  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    this.log(yosay(
      'Welcome to the marvelous [ gulp-html5-less with gulp ] generator!'
    ));

    var prompts = [
      {
        type: 'confirm',
        name: 'npm',
        message: 'Would you like to skip install NPM dependencies?',
        default: true
      }
    ];

    this.prompt(prompts, function (props) {
      this.options.npm = props.npm;
      done();
    }.bind(this));
  },  

  writing: {
    app: function () {
      var paths = [
        "package.json",
        "bower.json",
        "gulpfile.js",
        ".gitignore"
      ];

      var dirs = [
        'app/icons',
        'app/fonts',
        'app/images',
        'app/js/vendor',
        'app/js/src',
        'app/css/vendor',
        'app/css/src',
      ];

      this.fs.copy(
        this.templatePath('_index.html'),
        this.destinationPath('app/index.html')
      );

      for(var i = 0; i < dirs.length; i++) {
        this.mkdir(dirs[i]);
      }

      for(var j = 0; j < paths.length; j++) {
        this.fs.copy(
          this.templatePath('_' + paths[j]),
          this.destinationPath(paths[j])
        );  
      }
    }
  },

  install: function () {
    this.installDependencies({
      bower: true,
      npm: !this.options.npm
    });
  }
});

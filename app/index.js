'use strict';
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  options: {
    npm: false
  },

  initializing: function () {
    this.pkg = require('../package.json');
  },

  // Propting message to user
  prompting: function () {
    var done = this.async();

    this.log(yosay(
      'Welcome to the marvelous [ html5-less ] generator!'
    ));

    var prompts = [
      {
        type: 'confirm',
        name: 'npm',
        message: 'Would you like to skip install NPM dependencies?',
        default: false
      }
    ];

    this.prompt(prompts, function (props) {
      this.options.npm = props.npm;
      done();
    }.bind(this));
  },  

  // Copy files and create directories
  writing: {
    app: function () {
      var paths = [
        "package.json",
        "bower.json",
        "gulpfile.js"
      ];

      var dirs = [
        'app/icons',
        'app/fonts',
        'app/images',
        'app/js',
        'app/js/vendor',
        'app/js/build',
        'app/css',
        'app/css/less',
        'app/css/build',
      ];

      this.fs.copy(
        this.templatePath('_index.html'),
        this.destinationPath('app/index.html')
      );

      for(var i=0; i < dirs.length; i++) {
        this.mkdir(dirs[i]);
      }

      for(var i=0; i < paths.length; i++) {
        this.fs.copy(
          this.templatePath('_' + paths[i]),
          this.destinationPath(paths[i])
        );  
      }
    }
  },

  // Install all dependencies for npm and bower
  install: function () {
    this.installDependencies({
      bower: true,
      npm: this.options.npm
    });
  }
});

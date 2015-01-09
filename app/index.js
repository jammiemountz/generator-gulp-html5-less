'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the marvelous' + chalk.red('Html5less') + ' generator!'
    ));

    var prompts = [{
      type: 'confirm',
      name: 'npmInstall',
      message: 'Would you like to skip install NPM?',
      default: false
    }];

    this.prompt(prompts, function (props) {
      this.npmInstall = props.npmInstall;
      done();
    }.bind(this));
  },  

  writing: {
    app: function () {
      var paths = [
        "package.json",
        "bower.json",
        "gulpfile.js"
      ];

      var dirs = [
        'app/fonts',
        'app/images',
        'app/js',
        'app/js/vendor',
        'app/styles',
        'app/styles/less',
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

  install: function () {
    this.installDependencies({
      bower: true,
      npm: false
    });
  }
});

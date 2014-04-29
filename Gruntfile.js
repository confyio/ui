// jshint node:true

module.exports = function(grunt) {

  var Helpers = require('./tasks/helpers'),
      filterAvailable = Helpers.filterAvailableTasks,
      _ = grunt.util._,
      path = require('path');

  Helpers.pkg = require("./package.json");

  if (Helpers.isPackageAvailable("time-grunt")) {
    require("time-grunt")(grunt);
  }

  // Loads task options from `tasks/options/`
  // and loads tasks defined in `package.json`
  var config = _.extend({},
    require('load-grunt-config')(grunt, {
        configPath: path.join(__dirname, 'tasks/options'),
        loadGruntTasks: false,
        init: false
      }),
    require('load-grunt-config')(grunt, { // Custom options have precedence
        configPath: path.join(__dirname, 'tasks/custom-options'),
        init: false
      })
  );

  grunt.loadTasks('tasks'); // Loads tasks in `tasks/` folder

  config.env = process.env;

  // Confy's Main Tasks
  // ====================

  // Generate the production version
  // ------------------
  grunt.registerTask('build:dist', "Build a minified & production-ready version of your app.", filterAvailable([
    'clean:dist',
    'mktmp', // Create directoy beforehand, fixes race condition
    'sprites:create',
    'concurrent:dist', // Executed in parallel, see config below
    'copy:assemble',
    'useminPrepare', // Configures concat, cssmin and uglify
    'concat', // Combines css and javascript files
    'cssmin', // Minifies css
    'uglify', // Minifies javascript
    'imagemin', // Optimizes image compression
    'copy:dist', // Copies files not covered by concat and imagemin
    'rev', // Appends 8 char hash value to filenames
    'usemin', // Replaces file references
    'htmlmin:dist' // Removes comments and whitespace
  ]));

  // Default Task
  // ------------------
  grunt.registerTask('default', "Running your server", ['server:debug']);

  // Servers
  // -------------------
  grunt.registerTask('server:debug', "Run your server in development mode, auto-rebuilding when files change.", [
    'clean:debug',
    'build:debug',
    'express:debug',
    'watch'
  ]);

  grunt.registerTask('server:dist', "Build and preview a minified & production-ready version of your app.", [
    'build:dist',
    'express:dist:keepalive'
  ]);

  // Worker tasks
  // =================================

  grunt.registerTask('build:debug', filterAvailable([
    'jshint:tooling',
    'mktmp', // Create directoy beforehand, fixes race condition
    'sprites:create',
    'concurrent:debug' // Executed in parallel, see config below
  ]));

  // Parallelize most of the build process
  _.merge(config, {
    concurrent: {
      dist: [
        "emberTemplates:dist",
        "buildScripts",
        "buildStyles",
        "preprocess:dist"
      ],
      debug: [
        "emberTemplates:debug",
        "buildScripts",
        "buildStyles",
        "preprocess:debug"
      ]
    }
  });

  // Scripts
  grunt.registerTask('buildScripts', filterAvailable([
    'jshint:app',
    'validate-imports',
    'copy:javascript',
    'transpile',
    'concat_sourcemap'
  ]));

  // Styles
  grunt.registerTask('buildStyles', filterAvailable([
    'less:compile',
    'copy:css',
    'autoprefixer:app'
  ]));

  grunt.registerTask('mktmp', function() {
    grunt.file.mkdir('tmp/result');
  });

  grunt.initConfig(config);
};

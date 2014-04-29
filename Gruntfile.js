// jshint node:true

module.exports = function(grunt) {
  //
  // * for LESS, run `npm install --save-dev grunt-contrib-less`
  //
  // * for LiveReload, `npm install --save-dev connect-livereload`
  //
  // * for displaying the execution time of the grunt tasks,
  //   `npm install --save-dev time-grunt`
  //
  // * for minimizing the index.html at the end of the dist task
  //   `npm install --save-dev grunt-contrib-htmlmin`
  //
  // * for minimizing images in the dist task
  //   `npm install --save-dev grunt-contrib-imagemin`
  //
  // * for using images based CSS sprites (http://youtu.be/xD8DW6IQ6r0)
  //   `npm install --save-dev grunt-fancy-sprites`
  //   `bower install --save fancy-sprites-scss`
  //
  // * for automatically adding CSS vendor prefixes (autoprefixer)
  //   `npm install --save-dev grunt-autoprefixer`
  //
  // * for package import validations
  //   `npm install --save-dev grunt-es6-import-validate`
  //

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
  grunt.registerTask('dist', "Build a minified & production-ready version of your app.", filterAvailable([
                     'clean:dist',
                     'build:dist',
                     'copy:assemble',
                     'useminPrepare', // Configures concat, cssmin and uglify
                     'concat', // Combines css and javascript files
                     'cssmin', // Minifies css
                     'uglify', // Minifies javascript
                     'imagemin', // Optimizes image compression
                     'svgmin', // Optimize svg images
                     'copy:dist', // Copies files not covered by concat and imagemin
                     'rev', // Appends 8 char hash value to filenames
                     'usemin', // Replaces file references
                     'htmlmin:dist' // Removes comments and whitespace
                     ]));


  // Default Task
  // ------------------
  grunt.registerTask('default', "Running your server", ['server']);


  // Servers
  // -------------------
  grunt.registerTask('server', "Run your server in development mode, auto-rebuilding when files change.", function(proxyMethod) {
    var expressServerTask = 'expressServer:debug';
    if (proxyMethod) {
      expressServerTask += ':' + proxyMethod;
    }

    grunt.task.run(['clean:debug',
                    'build:debug',
                    expressServerTask,
                    'watch'
                    ]);
  });

  grunt.registerTask('server:dist', "Build and preview a minified & production-ready version of your app.", [
                     'dist',
                     'expressServer:dist:keepalive'
                     ]);

  // Worker tasks
  // =================================

  grunt.registerTask('build:dist', filterAvailable([
                     'mkdir', // Create directoy beforehand, fixes race condition
                     'fancySprites:create',
                     'concurrent:dist', // Executed in parallel, see config below
                     ]));

  grunt.registerTask('build:debug', filterAvailable([
                     'jshint:tooling',
                     'mkdir', // Create directoy beforehand, fixes race condition
                     'fancySprites:create',
                     'concurrent:debug', // Executed in parallel, see config below
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

  grunt.registerTask('mkdir', function() {
    grunt.file.mkdir('tmp/result');
  });

  grunt.initConfig(config);
};

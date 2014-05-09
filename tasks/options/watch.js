var Helpers = require('../helpers'),
    filterAvailable = Helpers.filterAvailableTasks,
    LIVERELOAD_PORT = 35729,
    liveReloadPort = (parseInt(process.env.PORT || 8000, 10) - 8000) + LIVERELOAD_PORT;

var docs = '{app}/**/*.js',
    scripts = '{app,config}/**/*.js',
    templates = 'app/templates/**/*.{hbs,handlebars,hjs}',
    sprites = 'app/sprites/**/*.{png,jpg,jpeg}',
    styles = 'app/styles/**/*.{css,less}',
    html = 'app/*.html',
    other = '{app,public}/**/*',
    bowerFile = 'bower.json',
    npmFile = 'package.json';

module.exports = {
  scripts: {
    files: [scripts],
    tasks: ['lock', 'buildScripts', 'unlock']
  },
  templates: {
    files: [templates],
    tasks: ['lock', 'unlock']
  },
  sprites: {
    files: [sprites],
    tasks: filterAvailable(['lock', 'sprites:create', 'unlock'])
  },
  styles: {
    files: [styles],
    tasks: ['lock', 'buildStyles', 'unlock']
  },
  html: {
    files: [html],
    tasks: ['lock', 'preprocess:debug', 'unlock']
  },
  other: {
    files: [other, '!'+scripts, '!'+templates, '!'+styles, '!'+html, bowerFile, npmFile],
    tasks: ['lock', 'build:debug', 'unlock']
  },

  options: {
    // No need to debounce
    debounceDelay: 0,
    // When we don't have inotify
    interval: 100,
    livereload: liveReloadPort
  }
};

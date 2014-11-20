var LIVERELOAD_PORT = 35729,
    liveReloadPort = (parseInt(process.env.PORT || 8000, 10) - 8000) + LIVERELOAD_PORT;

var docs = '{app}/**/*.js',
    scripts = '{app,config}/**/*.{js,jsx}',
    sprites = 'app/sprites/**/*.{png,jpg,jpeg}',
    styles = 'app/styles/**/*.{css,less}',
    html = 'app/*.html',
    other = '{app,public}/**/*',
    npmFile = 'package.json';

module.exports = {
  scripts: {
    files: [scripts],
    tasks: ['lock', 'buildScripts', 'unlock']
  },
  sprites: {
    files: [sprites],
    tasks: ['lock', 'sprites:create', 'unlock']
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
    files: [other, '!'+scripts, '!'+styles, '!'+html, npmFile],
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

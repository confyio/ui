var grunt = require('grunt');

module.exports = {
  options: {
    whitelist: {
      'ember/resolver': ['default'],
      'ember/load-initializers': ['default'],
      'ic-ajax': ['default'],
    }
  },

  app: {
    options: {
      moduleName: function (name) {
        return grunt.config.process('<%= package.namespace %>/') + name;
      }
    },
    files: [{
      expand: true,
      cwd: 'app',
      src: ['**/*.js']
    }]
  }
};

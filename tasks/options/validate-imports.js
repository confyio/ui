var grunt = require('grunt');

module.exports = {
  app: {
    options: {
      moduleName: function (name) {
        return grunt.config.process('<%= package.namespace %>/') + name;
      }
    },
    files: [{
      expand: true,
      cwd: 'tmp/javascript/app',
      src: ['**/*.js']
    }]
  }
};

module.exports = {
  app: {
    src: ['tmp/transpiled/app/**/*.js'],
    dest: 'tmp/result/assets/app.js',
    options: {
      sourcesContent: true
    },
  },

  config: {
    src: ['tmp/result/config/**/*.js'],
    dest: 'tmp/result/assets/config.js',
    options: {
      sourcesContent: true
    },
  },
};

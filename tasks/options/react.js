module.exports = {
  jsx: {
    files: [
      {
        expand: true,
        cwd: 'app',
        dest: 'tmp/javascript/app',
        src: ['**/*.jsx'],
        ext: '.js'
      }
    ]
  }
};

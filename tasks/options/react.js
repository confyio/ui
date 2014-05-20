module.exports = {
  jsx: {
    files: [
      {
        expand: true,
        cwd: 'app/react',
        dest: 'tmp/javascript/app/react',
        src: ['**/*.jsx'],
        ext: '.js'
      }
    ]
  }
};

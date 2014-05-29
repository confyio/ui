module.exports = {
  compile: {
    files: [{
      expand: true,
      cwd: 'app/styles',
      src: ['app.less'],
      dest: 'tmp/result/assets/',
      ext: '.css'
    }]
  }
};

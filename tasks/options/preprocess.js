module.exports = {
  debug: {
    src : 'app/index.html', dest : 'tmp/result/index.html',
    options: { context: { dist: false, tests: false } }
  },
  dist: {
    src : 'app/index.html', dest : 'tmp/result/index.html',
    options: { context: { dist: true, tests: false } }
  },
};

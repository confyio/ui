var gulp = require('gulp')
  , sync = require('gulp-sync')(gulp)
  , sourcemaps = require('gulp-sourcemaps')
  , concat  = require('gulp-concat')
  , rimraf = require('gulp-rimraf')
  , react = require('gulp-react')
  , less = require('gulp-less')
  , autoprefixer = require('gulp-autoprefixer')
  , transpile = require('gulp-es6-module-transpiler')
  , preprocess = require('gulp-preprocess')
  , useref = require('gulp-useref')
  , minifyCss = require('gulp-minify-css')
  , uglify = require('gulp-uglify')
  , livereload = require('gulp-livereload')
  , rev = require('gulp-rev-all')
  , aws = require('gulp-awspublish')
  , cloudfront = require('gulp-cloudfront-invalidate')
  , AMDFormatter = require('es6-module-transpiler-amd-formatter')
  , connectLiveReload = require('connect-livereload')
  , express = require('express');

gulp.task('default', ['server:debug']);

gulp.task('clean', function () {
  return gulp.src('tmp', { read: false })
    .pipe(rimraf());
});

gulp.task('react', function () {
  return gulp.src('app/**/*.jsx')
    .pipe(react())
    .pipe(gulp.dest('tmp/javascript/confy'));
});

gulp.task('less', function () {
  return gulp.src('app/styles/app.less')
    .pipe(less())
    .pipe(gulp.dest('tmp/result/assets'));
});

gulp.task('autoprefixer', ['less'], function () {
  return gulp.src('tmp/result/assets/app.css')
    .pipe(autoprefixer({
      browsers: ['> 0.01%']
    }))
    .pipe(gulp.dest('tmp/result/assets'))
    .pipe(livereload());
});

gulp.task('javascript', function () {
  return gulp.src('app/**/*.js')
    .pipe(gulp.dest('tmp/javascript/confy'));
});

gulp.task('assemble:public', function () {
  return gulp.src('public/**')
    .pipe(gulp.dest('tmp/result'));
});

gulp.task('assemble:config', function () {
  return gulp.src('config/**/*.js')
    .pipe(gulp.dest('tmp/result/config'));
});

gulp.task('assemble:packages', function () {
  return gulp.src('node_modules/**/*.js')
    .pipe(gulp.dest('tmp/result/node_modules'));
});

gulp.task('transpile', ['react', 'javascript'], function () {
  return gulp.src('tmp/javascript/**/*.js')
    .pipe(transpile({
      formatter: new AMDFormatter(),
      basePath: 'tmp/javascript'
    }))
    .pipe(gulp.dest('tmp/transpiled'));
});

gulp.task('concat', ['transpile'], function () {
  return gulp.src('tmp/transpiled/confy/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('app.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('tmp/result/assets'))
    .pipe(livereload());
});

gulp.task('preprocess:debug', function () {
  return gulp.src('app/index.html')
    .pipe(preprocess({ context: { dist: false } }))
    .pipe(gulp.dest('tmp/result'))
    .pipe(livereload());
});

gulp.task('preprocess:dist', function () {
  return gulp.src('app/index.html')
    .pipe(preprocess({ context: { dist: true } }))
    .pipe(gulp.dest('tmp/result'));
});

gulp.task('useref', function () {
  var assets = useref.assets();

  return gulp.src('tmp/result/*.html')
    .pipe(assets)
    .pipe(assets.restore())
    .pipe(useref())
    .pipe(gulp.dest('tmp/dist'));
});

gulp.task('minify', function () {
  return gulp.src('tmp/dist/**/*.css')
    .pipe(minifyCss())
    .pipe(gulp.dest('tmp/dist'));
})

gulp.task('uglify', function () {
  return gulp.src('tmp/dist/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('tmp/dist'));
});

gulp.task('assemble:assets', function () {
  return gulp.src(['tmp/result/**', '!**/*.{css,js,html}', '!**/*.map', '!node_modules'])
    .pipe(gulp.dest('tmp/dist'));
});

gulp.task('assets', ['assemble:assets'], function () {
  return gulp.src(['tmp/dist/config', 'tmp/dist/node_modules'], {read: false})
    .pipe(rimraf());
});

gulp.task('rev', function () {
  return gulp.src('tmp/dist/**')
    .pipe(rev({
      ignore: ['index.html', 'robots.txt', 'crossdomain.xml']
    }))
    .pipe(gulp.dest('tmp/cdn'));
});

gulp.task('s3', function () {
  var publisher = aws.create({params: {Bucket: 'confy'}});

  return gulp.src('tmp/cdn/**/*')
    .pipe(publisher.publish({
      "Cache-Control": "max-age=630720000, public",
      "Expires": new Date(Date.now() + 63072000000)
    }))
    .pipe(publisher.cache())
    .pipe(aws.reporter())
    .pipe(cloudfront({
      distribution: 'E2U654H2XRWD0W',
      paths: ['/index.html']
    }));
});

gulp.task('express:debug', function () {
  var app = express();

  app.use(connectLiveReload());

  app.use('/config', express.static('config'));
  app.use('/node_modules', express.static('node_modules'));
  app.use(express.static('public'));
  app.use(express.static('tmp/result'));

  app.listen(8000);
});

gulp.task('express:dist', function () {
  var app = express();

  app.use(express.static('tmp/dist'));

  app.listen(8000);
});

gulp.task('build:debug', sync.sync([
  'clean',
  ['concat', 'autoprefixer'],
  'preprocess:debug'
], 'build:debug:deps'));

gulp.task('build:dist', sync.sync([
  'clean',
  ['concat', 'autoprefixer'],
  'preprocess:dist',
  ['assemble:public', 'assemble:config', 'assemble:packages'],
  'useref',
  ['uglify', 'minify'],
  'assets'
], 'build:dist:deps'));

gulp.task('watch', function() {
  livereload.listen();

  gulp.watch('app/index.html', ['preprocess:debug']);
  gulp.watch('app/styles/*.less', ['autoprefixer']);
  gulp.watch('app/**/*.{js,jsx}', ['concat']);
});

gulp.task('server:debug', sync.sync([
  'build:debug',
  'express:debug',
  'watch'
], 'server:debug:deps'));

gulp.task('server:dist', sync.sync([
  'build:dist',
  'express:dist'
], 'server:dist:deps'));

gulp.task('publish', sync.sync([
  'build:dist',
  'rev',
  's3'
], 'publish:deps'));

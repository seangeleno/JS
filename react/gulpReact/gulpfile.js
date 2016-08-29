  const gulp = require('gulp');
  //console logs info while build process is running (debugging)
  const gutil = require('gulp-util');
  // used for throwing our touch files from one part of the process to another
  const source = require('vinyl-source-stream');
  //browserify figures what parts of code belong to other parts and puts them in order
  const browserify = require('browserify');
  //rewrites our gulp file us every time we make a change - HOT RELOADING
  const watchify = require('watchify');
  //in conjuction with browserify to convert JSX to JS
  const reactify = require('reactify');


  gulp.task('default', function () {
    var bundler = watchify(browserify({
      entries: ['./src/app.jsx'],
      transform: ['reactify'],
      extensions: ['.jsx'],
      debug: true,
      cache: {},
      packageCache: {},
      fullPaths: true
    }))

    function build(file) {
      if(file) gutil.log('Recompiling ' + file , gutil.colors.magenta('yarrr Im a pirate matey'));
      return bundler.bundle()
        .on('error', gutil.log.bind(gutil, 'Browserify Error'))
        .pipe(source('main.js'))
        .pipe(gulp.dest('./'));
    };

    build();
    bundler.on('update', build);

  });

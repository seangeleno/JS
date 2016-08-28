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
    //first step: create bundler aka object that executes build
    var bundler = watchify(browserify({
      entries: ['./src/app.jsx'],
      transform: [reactify], //JSX to JS
      extensions: ['.jsx'],
      debug: true,
      cache: {},
      packageCache: {},
      fullPaths: true
    }));

    function build(file) {
      if (file) {
        gutil.log('Recompiling ' + file);
      }
      return bundler
        .bundle()
        //.on(error) console logs any bundling errors
        .on('error', gutil.log.bind(gutil, 'Browserify Error'))
        //source and dest: after bundler has run and all files converted to JS from JSX and put in the correct order
        .pipe(source('main.js'))
        //Place that newly created main.js file in ./ current directory
        .pipe(gulp.dest('./'))  ;
    };
    build()
    bundler.on('update', build);
  });

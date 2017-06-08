'use strict'

var gulp         = require('gulp'),
    browserSync  = require('browser-sync').create(),
    bowerNormal  = require('gulp-bower-normalize'),
    autoprefixer = require('gulp-autoprefixer'),
    clean        = require('gulp-clean'),
    concat       = require('gulp-concat'),
    debug        = require('gulp-debug'),
    filter       = require('gulp-filter'),
    notify       = require('gulp-notify'),
    rename       = require('gulp-rename'),
    rigger       = require('gulp-rigger'),
    sass         = require('gulp-sass'),
    minCss       = require('gulp-minify-css'),
    pump         = require('pump'),
    sftp         = require('gulp-sftp'),
    sourcemaps   = require('gulp-sourcemaps'),
    uglify       = require('gulp-uglify'),
    mainFiles    = require('main-bower-files');

var paths = {
    src: {
        html: ['./src/*.html'],
        scss: ['./src/scss/**/*.scss'],
        js: ['./src/js/lib.js', './src/js/login.js', './src/js/libs', './src/js/libs/lib.js'],
    },
    build: {
        build: './build',
        scss: './build/css',
        js: './build/js'
    },
    vendor: './vendor'
};

// get main bowerFiles
gulp.task('mainFiles', function(done) {
    return gulp.src(mainFiles(), {base: './bower_components'})
        .pipe(bowerNormal({bowerJson: './bower.json'}))
        .pipe(gulp.dest(paths.vendor));
    done();
});

// clean build
gulp.task('clean', function(done) {
    return gulp.src(paths.build.build, {read: false})
        .pipe(clean());
    done();
});

// scss to css + minify          
gulp.task('scss', function(done) {
    return gulp.src(paths.src.scss)
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
	       }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        //.pipe(minCss())
        //.pipe(rename({ extname: '.min.css' }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.build.scss));
    done();
});


gulp.task('libs', function (done) {
    gulp.src(paths.src.js[0])
        .pipe(rigger())
        .pipe(gulp.dest(paths.src.js[2]));
    done();
});
// unite all js files
gulp.task('js', gulp.series('libs', function(done){
    return gulp.src([paths.src.js[3], paths.src.js[1]])
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest(paths.build.js));
    done();
}));

// minify js
/*gulp.task('compress', gulp.series('js', function(done) {
  pump([
        gulp.src(paths.src.allJs),
        uglify(),
        gulp.dest(paths.build.js)
    ],
    done()
  );
}));
*/

gulp.task('build', gulp.series('clean', 'scss', 'js', function(done){
    return gulp.src(paths.src.html)
        .pipe(gulp.dest(paths.build.build));
    done();
}));

// browserSync + watchers
gulp.task('serve', gulp.series('build', function(done) {
    browserSync.init({
        server: "./build"
    });

    gulp.watch(paths.src.scss, gulp.series('scss'));
    gulp.watch(paths.src.js, gulp.series('js'));
    gulp.watch(paths.build.build).on('change', browserSync.reload);
}));


// default: build, browserSync, watch

gulp.task('default', gulp.series('build', 'serve'));

// sftp
var obj = {
  "site": "user1",
  "ftp": {
    "port": "3000",
    "user": "user1",
    "pass": "user1",
    "folder": "user1"
  }
};

gulp.task('sftp', function (done) {
  return gulp.src(['/build/' + obj.site + '/**/**.*', '/build/' + obj.site + '/.htaccess'])
      .pipe(sftp({
          host: 'website.com',
          user: 'johndoe',
          pass: '1234',
          remotePath: "/home/" + obj.ftp.folder + "/public_html/"
      }));
  done();
});


const {src, dest, parallel, watch} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

function browsersync() {
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
};

function watching() {
  watch("app/scss/**/*.scss", styles);
  watch("./*.html").on('change', browserSync.reload);
}

function styles() {
  return src('app/scss/**/*.scss')
    .pipe(sass({outputStyle: "compressed"}))
    .pipe(dest('./'))
    .pipe(browserSync.stream())
};

exports.styles = styles;
exports.browsersync = browsersync;
exports.watching = watching;

exports.default = parallel (browsersync, watching);
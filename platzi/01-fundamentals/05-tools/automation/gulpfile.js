const gulp = require('gulp');
const server = require('gulp-server-livereload');

gulp.task('build', (callback) => {
  console.log('Building web');
  setTimeout(callback, 1200);
});

gulp.task('serve', (callback) => {
  console.log('');
  gulp.src('www')
    .pipe(server({
      livereload: true,
      open: true
    }));
})

gulp.task('default', gulp.series('build', 'serve'));
const gulp = require("gulp");
const uglifycss = require('gulp-uglifycss');
 
gulp.task('css', async function () {
  gulp.src('./styles/*.css')
    .pipe(uglifycss({
      "uglyComments": true
    }))
    .pipe(gulp.dest('./dist/'));
});

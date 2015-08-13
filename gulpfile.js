var gulp = require('gulp');
var mainBowerFiles = require('main-bower-files');

gulp.task('default', function() {
  gulp.src(mainBowerFiles()).pipe(gulp.dest('./public/javascripts/'));
});

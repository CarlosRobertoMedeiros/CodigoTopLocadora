var gulp = require('gulp');
var webserver = require('gulp-webserver');
 
gulp.task('webserver', function() {
  gulp.src("./app")
    .pipe(webserver({
      host:"localhost",
      port:8020,
      livereload: true,
      directoryListing: false,
      open: true,
      /*fallback:"hello.js"*/
    }));
});
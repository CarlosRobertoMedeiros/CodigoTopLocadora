var gulp = require('gulp');
/*var webserver = require('gulp-webserver');*/

var st = require('st');
var connect = require('gulp-connect');

 
/*gulp.task('webserver', function() {
  gulp.src("./app/")
    .pipe(webserver({
      host:"localhost",
      port:8020,
      livereload: true,
      directoryListing: false,
      open: true,
      /*fallback:"hello.js"*/
    /*}));
});*/


/*Adaptação provisória */
gulp.task('loadServer', function(){
	connect.server({
    root: 'app/',
    host: 'localhost',
    port: 8020,
    livereload: {
      port: 35929
    },
    middleware: function (connect, opt) {
      return [
        st({ path: 'node_modules', url: '/node_modules' })
      ];
    }
  })
});
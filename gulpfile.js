const gulp = require("gulp");
const livereload = require("gulp-livereload");

gulp.task("default", function() {
  livereload.listen();
  gulp.watch("**/*.php").on("change", function(file) {
    livereload.changed(file);
  });
});

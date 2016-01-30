var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');


gulp.task('browserify', function() {
  browserify()
    .require('./src/app.jsx', { entry: true,  
            extensions: ['.jsx'], 
            debug: true 
        })
    .transform(babelify, {presets: ["react"]})
    .bundle()
    .on("error", function (err) { console.log("Error : " + err.message); })
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./public/kavascripts'))
});
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    minicss = require('gulp-cssmin'),
    htmlmin = require('gulp-html-minifier2');

function css() {
    return gulp.src('./css/*.css')
        .pipe(concat('bundle.css'))
        .pipe(minicss())
        .pipe(gulp.dest('dist/'));
}

function html() {
    return gulp.src('./index.html')
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('./'))
}

const build = gulp.series(css, html);
gulp.task('default', build);
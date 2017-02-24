var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');

// gulp.task('html', function(){
// 	gulp.src('./dev/**/*.html')
// 		.pipe(gulp.dest('./dist/'));
// });

gulp.task('pug', function buildHTML() {
	return gulp.src('./dev/**/!(_)*.pug')
	.pipe(pug({
		pretty: true,
		basedir: './dev'
	}))
	.pipe(gulp.dest('./dist'));
	console.log("Pug Compiled");
});

gulp.task('sass', function() {
  return gulp.src('./dev/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
    console.log("Sass Compiled");
});

gulp.task('js', function() {
	gulp.src('./dev/js/**/*.js')
	.pipe(gulp.dest('./dist/js/'));
	console.log("JS Compiled");
});

gulp.task('img', function() {
	gulp.src('./dev/img/**/*.{doc,jpg,png}')
	.pipe(gulp.dest('./dist/img/'));
	console.log("Img Compiled");
});

gulp.task('watch', function() {
	// gulp.watch('./dev/*.html', ['html']);
	gulp.watch('./dev/**/*.pug', ['pug']);
	gulp.watch('./dev/sass/**/*.scss', ['sass']);
	console.log("Watching...");
});

// Force compile of everything
gulp.task('compile', ['img', 'js', 'sass', 'pug']);

// Watch and compile
gulp.task('develop', ['compile', 'watch']);
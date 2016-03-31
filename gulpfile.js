var gulp = require('gulp'),
	jshint = require('gulp-jshint'),
	stylish = require('jshint-stylish');

	// concat = require('gulp-concat')
	// minify = require('gulp-minify'),
	// del = require('del');

gulp.task('jshint', function () {
	return gulp.src(['./*.js', 'scripts/components/functions/*.js', 'scripts/components/models/*.js', 'scripts/*.js'])
		.pipe(jshint())
		.pipe(jshint.reporter(stylish))
		.pipe(jshint.reporter('fail'));
});
// gulp.task('concat', function(){
// 	return gulp.src('views/scripts/components/*.js')
// 	.pipe(concat('all.js'))
// 	.pipe(gulp.dest('main'));
// });



//gulp.task('min', function () {
//	return gulp.src('./views/main.js')
//		.pipe(minify('app.min.js'))
//		.pipe(gulp.dest('./views/'));
//});


//gulp.task('scss', function () {
//	return gulp.src('./scss/*.scss')
//		.pipe(sass().on('error', sass.logError))
//		.pipe(gulp.dest('./css'))
//});

gulp.task('watch', function () {
	gulp.watch(['./*.js', 'scripts/components/functions/*.js', 'scripts/components/models/*.js', 'scripts/*.js'], ['jshint']);
	gulp.watch(['./scss/*.scss'], ['scss']);
});
const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const tsc = require("gulp-typescript");

gulp.task("scripts", function () {
	console.log("Compiling scripts...");
	const tsConfig = tsc.createProject("tsconfig.json"); // Read TS config file
	return tsConfig
		.src()
		.pipe(tsConfig()) // Compile with TS
		.pipe(gulp.dest("assets/scripts")); // Destination folder
});

gulp.task("styles", function () {
	console.log("Building styles...");
	return gulp
		.src("src/sass/**/*.scss") // Source files
		.pipe(sass()) // Transform
		.pipe(gulp.dest("assets/styles")); // Destination folder
});

gulp.task(
	"scripts:watch",
	gulp.series("scripts", function (done) {
		// Escuchar cambios
		gulp.watch("src/scripts/**/*.ts", gulp.series("scripts"));
		done();
	})
);

gulp.task(
	"styles:watch",
	gulp.series("styles", function (done) {
		// Escuchar cambios
		gulp.watch("src/styles/**/*.scss", gulp.series("styles"));
		done();
	})
);

gulp.task("serve", gulp.parallel("scripts:watch", "styles:watch"));

gulp.task("default", gulp.parallel("styles", "scripts"), function () {
	console.log("Building project...");
	done();
});

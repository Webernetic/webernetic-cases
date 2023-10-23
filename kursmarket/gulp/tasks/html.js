import webpHtmlNosvg from "gulp-webp-html-nosvg";
import pug from "gulp-pug";
import prettify from "gulp-prettify";

export const html = () => {
	return app.gulp.src(app.path.src.html)
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "HTML",
				message: "Error <%= error.message %>"
			})
		))
		.pipe(pug({
			// сжатие HTML файла
			pretty: true,
			// показывать в терминале, какой файл обработан
			verbose: true
		}))
		.pipe(app.plugins.replace(/@img\//g, 'img/'))
		.pipe(
			app.plugins.if(
				app.isBuild,
				webpHtmlNosvg())
			)
		.pipe(prettify({
			indent_size: 4,
			unformatted: ['p', 'b', 'i']
		}))
		.pipe(app.gulp.dest(app.path.build.html))
		.pipe(app.plugins.browsersync.stream());
}
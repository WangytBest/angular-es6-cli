import gulp     from 'gulp';
import webpack  from 'webpack';
import url      from 'url';
import serve    from 'browser-sync';
import config   from './config';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

gulp.task('serve', () => {
    const webpackConfig = require('./webpack.dev.config').default;
    webpackConfig.entry.app = [
        // 启用webpack HRM
        'webpack-hot-middleware/client?reload=true'
    ].concat(webpackConfig.entry.app);

    var compiler = webpack(webpackConfig);

    serve({
        port: process.env.PORT || config.SERVER_PORT,
        open: false,
        server: { baseDir: config.PATH_SRC },
        middleware: [
            webpackDevMiddleware(compiler, {
                stats: {
                    colors: true,
                    chunks: false,
                    modules: false
                },
                publicPath: webpackConfig.output.publicPath
            }),
            webpackHotMiddleware(compiler)
        ]
    })
});

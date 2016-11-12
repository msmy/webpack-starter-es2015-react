const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    debug: true,
    entry: './src/js/app.js',
    output: {
        path: __dirname + '/dist/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new BrowserSyncPlugin({
            server: {
                baseDir: ['dist']
            }
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]
};

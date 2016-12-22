var webpack = require('webpack');

module.exports = {
    context: __dirname + '/src',
    entry: './app.js',
    output: {
        path: __dirname + '/dist',
        filename: 'app.bundle.js'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false }
        })
    ]
};

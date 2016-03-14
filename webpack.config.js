var path = require('path');
module.exports = {
    entry: './test.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    devServer: {
        contentBase: './',
        host: '127.0.0.1'
    },
    resolve: {
        modulesDirectories: [
            'node_modules'
        ]
    }
};

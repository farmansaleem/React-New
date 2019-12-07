var path = require('path');
var hwp = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, '/public/src/index.js'),
    output: {
        filename: 'build.js',
        path: path.join(__dirname, '/dist')
    },
    devServer: {
        historyApiFallback: true,
    },
    module: {
        rules: [{
                exclude: /node_modules/,
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new hwp({
            template: path.join(__dirname, '/public/views/index.html')
        })
    ]
}
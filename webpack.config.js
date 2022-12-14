const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'none',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
    },
    module: {
        rules: [{
                test: /\.(css)$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(gif|png|jpe?g)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'images/'
                    }
                }]
            },

            {
                test: /\.html$/,
                use: [
                    'html-loader'
                ]
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Aeris Weather'
        }),
        new HtmlWebpackPartialsPlugin({
            path: path.join(__dirname, './src/partials/head.html'),
            priority: 'low',
            location: 'head',
        }),
        new HtmlWebpackPartialsPlugin({
            path: path.join(__dirname, './src/partials/siteheader.html')
        }),
        new HtmlWebpackPartialsPlugin({
            path: path.join(__dirname, './src/partials/currentconditions.html')
        }),
        new HtmlWebpackPartialsPlugin({
            path: path.join(__dirname, './src/partials/forecast.html')
        }),
        new HtmlWebpackPartialsPlugin({
            path: path.join(__dirname, './src/partials/staticmap.html')
        }),
        new HtmlWebpackPartialsPlugin({
            path: path.join(__dirname, './src/partials/interactivemap.html')
        }),
        new HtmlWebpackPartialsPlugin({
            path: path.join(__dirname, './src/partials/sitefooter.html')
        }),
        new CopyPlugin({
            patterns: [
                { from: "./src/images", to: "./images/" },
            ],
        }),
    ]

}
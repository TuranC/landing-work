const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        'first-style': path.resolve(__dirname, 'src/style/first-window-page.scss'),
        main: path.resolve(__dirname, 'src/app/index.js'),
    },
    output: {
        path: path.join(__dirname, 'docs'),
        filename: '[name].[contenthash].js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(eot)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            },
            {
                test: /\.(woff(2)?|ttf)$/,
                loader: 'url-loader'
            },
            {
                test: /\.(png)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            },
        ],
    },
    plugins: [
        // new HtmlWebpackPlugin({
        //     template: __dirname + "/docs/index.html",
        //     inject: false,
        //     filename: "index.html"
        // }),
        // new HtmlWebpackPlugin({
        //     template: __dirname + "/src/public/index.html",
        //     inject: 'body',
        //     filename: "index.html",
        // }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '/docs/index.html'),
            inject: false,
            filename: "index.html",
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
        new webpack.HashedModuleIdsPlugin(),
    ],
    devServer: {
        contentBase: './src/public',
        port: 7700,
    }
};
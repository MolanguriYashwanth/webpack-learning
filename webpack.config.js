const { join, resolve } = require('path');
require("@babel/register");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    devtool: 'cheap-module-eval-source-map',
    //entry: './src/index.js',
    entry: join(__dirname, 'src', 'index.js'),
    output: {
        path: resolve(__dirname, 'dist'),
        chunkFilename: '[id].js',
        filename: 'main.bundle.js',
        publicPath: ''
    },
    // resolve: {
    //     extensions: ['.js', '.jsx']
    // },
    module: {
        rules: [
            {
                test: /.js$|.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', options: {
                        presets: ['@babel/preset-env',"@babel/preset-react", '@babel/typescript']
                    }
                }
            },
            {
                test: [/.css$/],
                use: [
                    'style-loader',
                    'css-loader'
                ],
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/images'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack 4 Starter',
            template: './src/index.html',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: false
            }
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
           })
    ]
};
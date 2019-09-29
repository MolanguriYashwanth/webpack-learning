const { join, resolve } = require('path');
require("@babel/register");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
module.exports = {
    devtool: 'cheap-module-source-map',
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
                        presets: ['@babel/preset-env', "@babel/preset-react", '@babel/typescript']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            importLoaders: 1,
                            modules: {
                                localIdentName: "[name]__[local]___[hash:base64:5]",
                            }
                        }
                    }

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
    stats: { children: false },
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
    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
            }),
            new OptimizeCSSAssetsPlugin()
        ],
    },
};
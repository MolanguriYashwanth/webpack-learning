
//UseFul Links
https://medium.com/@jeffrey.allen.lewis/the-ultimate-2018-webpack-4-and-babel-setup-guide-npm-yarn-dependencies-compared-entry-points-866b577da6a


https://hackernoon.com/lets-start-with-webpack-4-91a0f1dba02e

//css loaders 
{
            //     test: /\.css$/,
            //     use: [
            //         { loader: 'style-loader' },
            //         {
            //             loader: 'css-loader',
            //             options: {
            //                 importLoaders: 1,
            //                 modules: true,
            //                 localIdentName: '[name]__[local]__[hash:base64:5]'
            //             }
            //         },
            //         {
            //             loader: 'postcss-loader',
            //             options: {
            //                 ident: 'postcss',
            //                 plugins: () => [autoprefixer({
            //                     browsers: [
            //                         "last 1 version",
            //                         "> 1%",
            //                         "maintained node versions",
            //                         "not dead"
            //                     ]
            //                 })]
            //             }
            //         },

            //     ],
            //     exclude: /node_modules/
            // },



//Image Loaders
    {
                test: /\.(png|jpg|gif)$/i,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 8192,
                      fallback: 'file-loader',
                    },
                  },
                ],
              }            



//Plugins

  // plugins: [
    //     new ExtractTextPlugin({
    //       filename: 'build.min.css',
    //       allChunks: true,
    //     }),
    //     new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    //     // compile time plugins
    //     new webpack.DefinePlugin({
    //       'process.env.NODE_ENV': '"production"',
    //     }),
    //     // webpack-dev-server enhancement plugins
    //     new DashboardPlugin(),
    //     new webpack.HotModuleReplacementPlugin(),
    //   ]
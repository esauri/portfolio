var webpack = require('webpack'),
    path = require('path'),
    config = {
      context: __dirname + '/public/js/dev',
      entry: './main',
      output: {
        path: __dirname + '/public/js/build',
        filename: 'bundle.min.js'
      },
      module: {
        loaders: [
          {
            test: /\.js$/,
            loaders: ['babel-loader?presets[]=es2015'],
            exclude: /node_modules/
          }
        ]
      }
      /* Uncomment to minify js file */
      // ,
      // plugins: [
      //   new webpack.optimize.UglifyJsPlugin({minimize: true})
      // ]
    };
module.exports = config;
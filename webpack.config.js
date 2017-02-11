var queryObject = {presets: [require.resolve('babel-preset-es2015')]};
var query = require('querystring').stringify(queryObject);
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
            loaders: ['babel?' + query],
            exclude: /node_modules/
          }
        ]
      },
      /* Uncomment to minify js file */
      plugins: [
        new webpack.optimize.UglifyJsPlugin({minimize: true})
      ]
    };
module.exports = config;
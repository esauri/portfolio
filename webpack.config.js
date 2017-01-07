var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');
// Change src to public
// Change client to main or build
module.exports = {
  devtool: debug ? "inline-sourcemap" : null,
  entry: './app/index.js',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        }
      }
    ]
  },
  output: {
    path: __dirname + "/build/js/",
    filename: "bundle.min.js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};


// var path = require('path');
// var webpack = require('webpack');
//
// module.exports = {
//   devtool: 'eval',
//   entry: [
//     'webpack-dev-server/client?http://localhost:3000/',
//     'webpack/hot/only-dev-server',
//     './app/index'
//   ],
//   output: {
//     path: path.join(__dirname, 'build/js/'),
//     filename: 'bundle.min.js',
//     publicPath: '/js/'
//   },
//   plugins: [
//     new webpack.HotModuleReplacementPlugin(),
//     new webpack.optimize.DedupePlugin(),
//     new webpack.optimize.OccurenceOrderPlugin(),
//     new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
//   ],
//   module: {
//     loaders: [
//       {
//         test: /\.jsx?$/,
//         exclude: /(node_modules|bower_components)/,
//         loaders: ['react-hot', 'babel'],
//         include: path.join(__dirname, 'app')
//       },
//       {
//         test: /\.json$/,
//         loader: 'json'
//       }
//     ]
//   }
// };

const autoprefixer = require('autoprefixer');
const path = require('path');
var webpack = require("webpack");


module.exports = {
  entry: [
    './node_modules/zone.js/dist/zone.js',
    './node_modules/jquery/dist/jquery.min.js',
    './node_modules/materialize-css/dist/js/materialize.min.js',
    './src/polyfills.ts',
    './src/app/main.ts'],
  output: {
    path: path.resolve('./dist'),
    filename: 'bundle.js'
  },
  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
    alias: {
      materialize: 'materialize-css/dist/js/materialize.js'
    }
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loaders: ['ts']
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      },
      {
        test: /\.scss$/,
        loaders: ['raw', 'csso', 'postcss', 'sass?sourceMap']
      },
      {
        test: /\.woff$/,
        // Inline small woff files and output them below font/.
        // Set mimetype just in case.
        loader: 'url',
        query: {
          name: 'font/[hash].[ext]',
          limit: 50000,
          mimetype: 'application/font-woff'
        }
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      "root.jQuery": "jquery",
      Hammer: "hammerjs/hammer"
    })
  ],
  postcss: function() {
    return [autoprefixer];
  }
};

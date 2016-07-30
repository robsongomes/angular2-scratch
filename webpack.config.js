const autoprefixer = require('autoprefixer');
const path = require('path');

module.exports = {
  // entry: ['./node_modules/zone.js/dist/zone.js', './src/app.ts'],
  entry: ['./src/app.ts'],
  output: {
    path: path.resolve('./dist'),
    filename: 'bundle.js'
  },
  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
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
  postcss: function() {
    return [autoprefixer];
  }
};

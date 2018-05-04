const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './assets/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.(scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader', // inject CSS to page
          use: [{
            loader: 'css-loader', // translates CSS into CommonJS modules
            options: {
              minimize: true,
              sourceMap: true,
            }
          }, {
            loader: 'postcss-loader', // Run post css actions
            options: {
              sourceMap: true,
              plugins: function () { // post css plugins, can be exported to postcss.config.js
                return [
                  require('precss'),
                  require('autoprefixer'),
                ];
              },
            },
          }, {
            loader: 'sass-loader', // compiles Sass to CSS
            options: {
              sourceMap: true,
            },
          }],
        }),
      },
    ],
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'HTML Starter',
      template: './assets/index.htm',
    }),
    new ExtractTextPlugin('styles.css'),
  ]
};

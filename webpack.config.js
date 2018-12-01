const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './assets/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(html)$/,
        loader: 'html-loader',
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                require('autoprefixer')
              ],
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
    ],
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'HTML Starter - homepage',
      template: './assets/html/index.htm',
    }),
    new HtmlWebpackPlugin({
      title: 'HTML Starter - category',
      template: './assets/html/category.htm',
      filename: 'category.htm',
    }),
    new HtmlWebpackPlugin({
      title: 'HTML Starter - post',
      template: './assets/html/post.htm',
      filename: 'post.htm',
    }),
    new MiniCssExtractPlugin({
      filename: './css/styles.css'
    }),
  ]
};

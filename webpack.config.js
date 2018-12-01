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
      title: 'HTML Starter - category #1',
      template: './assets/html/category-01.htm',
      filename: 'category-01.htm',
    }),
    new HtmlWebpackPlugin({
      title: 'HTML Starter - category #2',
      template: './assets/html/category-02.htm',
      filename: 'category-02.htm',
    }),
    new HtmlWebpackPlugin({
      title: 'HTML Starter - category #3',
      template: './assets/html/category-03.htm',
      filename: 'category-03.htm',
    }),
    new HtmlWebpackPlugin({
      title: 'HTML Starter - category #4',
      template: './assets/html/category-04.htm',
      filename: 'category-04.htm',
    }),
    new HtmlWebpackPlugin({
      title: 'HTML Starter - category #5',
      template: './assets/html/category-05.htm',
      filename: 'category-05.htm',
    }),
    new HtmlWebpackPlugin({
      title: 'HTML Starter - category #6',
      template: './assets/html/category-06.htm',
      filename: 'category-06.htm',
    }),
    new HtmlWebpackPlugin({
      title: 'HTML Starter - category #7',
      template: './assets/html/category-07.htm',
      filename: 'category-07.htm',
    }),
    new HtmlWebpackPlugin({
      title: 'HTML Starter - category #8',
      template: './assets/html/category-08.htm',
      filename: 'category-08.htm',
    }),
    new HtmlWebpackPlugin({
      title: 'HTML Starter - category #9',
      template: './assets/html/category-09.htm',
      filename: 'category-09.htm',
    }),
    new HtmlWebpackPlugin({
      title: 'HTML Starter - product #1',
      template: './assets/html/product-01.htm',
      filename: 'product-01.htm',
    }),
    new MiniCssExtractPlugin({
      filename: './css/styles.css'
    }),
  ]
};

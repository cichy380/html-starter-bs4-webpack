const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './assets/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.bundle.js',
  },
  // Generate sourcemaps for proper error messages
  devtool: 'source-map',
  performance: {
    // Turn off size warnings for entry points
    hints: false,
  },
  module: {
    rules: [
      {
        test: /\.(html)$/,
        loader: 'html-loader',
        exclude: /node_modules/,
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
        ],
        exclude: /node_modules/,
      },
      {
        enforce: 'pre', // checked before being processed by babel-loader
        test: /\.(js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,

      },
      {
        test: /\.(js)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  // DevServer
  // https://webpack.js.org/configuration/dev-server/
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
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

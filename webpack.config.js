const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './assets/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './js/index.bundle.js',
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
        options: {
          // Interpolation syntax for ES6 template strings
          interpolate: true,
          // Disable minifcation during production mode
          minimize: false,
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            }
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: true
            }
          },
          {
            loader: 'resolve-url-loader',
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
          },
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
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: (url, resourcePath, context) => {
                if (/icon\.png|tile\.png|tile-wide\.png/.test(resourcePath)) {
                  return url;
                }
                else {
                  return `images/${url}`;
                }
              },
              name: '[name].[ext]',
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              disable: process.env.NODE_ENV !== 'production', // Disable during development
              mozjpeg: {
                progressive: true,
                quality: 75
              },
            },
          }
        ],
        exclude: /node_modules/,
      },
      {
        test: /(favicon\.ico|site\.webmanifest|browserconfig\.xml|robots\.txt|humans\.txt)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?[a-z0-9=.]+)?$/,
        loader: 'file-loader',
        options: {
          outputPath: 'fonts',
          name: '[name].[ext]',
        },
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
      template: './assets/html/index.html',
      filename: 'index.html',
      hash: true,
    }),
    new HtmlWebpackPlugin({
      template: './assets/html/404.html',
      filename: '404.html',
      hash: true,
    }),
    new MiniCssExtractPlugin({
      filename: './css/styles.css'
    }),
  ]
};

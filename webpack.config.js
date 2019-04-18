/* eslint import/no-extraneous-dependencies: 0 */
const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const env = process.env.WEBPACK_BUILD || process.env.NODE_ENV || 'development';

const config = {
  mode: env,
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  node: {
    fs: 'empty'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve('./build'),
    libraryTarget: 'umd',
    // globalObject: '(typeof self !== \'undefined\' ? self : this)'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env)
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css',
      chunkFilename: 'assets/[id].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.json$/,
        use: 'json-loader?cacheDirectory'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader?cacheDirectory'
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      'modulist-css': path.join(__dirname, 'node_modules/@modulist/css/dist/modulist.css'),
      modulist: path.resolve('./src')
    }
  }
};

module.exports = config;

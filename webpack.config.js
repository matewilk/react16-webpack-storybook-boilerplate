'use strict';

let webpack = require('webpack');
let path = require('path');

let config = {
  devtool: 'source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    './client/app/index.jsx'
  ],
  output: {
    path: path.join(__dirname, 'client/public'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'stage-2', 'react', {'modules': false}]
        }
      },
      {
        test: /\.(png|woff|woff2|ttf|eot|svg)(\?]?.*)?$/,
        loader: 'url?limit=10000'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    hot: true,
    contentBase: './client/public',
    host: '0.0.0.0',
    proxy: {
      '*': 'http://localhost:3000'
    }
  }
};

module.exports = config;

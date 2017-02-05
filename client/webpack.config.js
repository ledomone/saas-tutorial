const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const path = require('path');

const config = {
  context: __dirname,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      test: /\.(js|jsx)$/,
      loader: 'babel-loader'
    },
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('css-loader!sass-loader')
    }]
  },
  devServer: {
    inline: true,
    historyApiFallback: true,
    contentBase: './'
  },
  devtool: "cheap-eval-source-map",
  plugins: [
    new webpack.DefinePlugin({ 'process.env':{ 'NODE_ENV': JSON.stringify('production') } }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      output: { comments: false },
      mangle: false,
      sourcemap: false,
      minimize: true,
      mangle: { except: ['$super', '$', 'exports', 'require', '$q', '$ocLazyLoad'] }
    }),
    new ExtractTextPlugin({
      filename: 'src/public/stylesheets/app.css',
      allChunks: true
    })
  ]
};

module.exports = config;

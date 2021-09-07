const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: ['@babel/polyfill', './public/javascripts/main.js', './public/stylesheets/main.sass'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './js/bundle.js'
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: './css/style.css'})
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.join(__dirname, 'public/javascripts')
        ],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          }
        }
      },
      {
         test: /\.sass$/, 
         use: [
             MiniCssExtractPlugin.loader,
             'css-loader',
             'sass-loader'
         ],
         exclude: /node_modules/
      }
    ]
  },
  devtool: 'source-map',
  // https://webpack.js.org/concepts/mode/#mode-development
  mode: 'development'
};
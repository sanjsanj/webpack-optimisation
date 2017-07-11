const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractCoreCss = new ExtractTextPlugin("dist/[name]-CORE.css");
const extractOtherCss = new ExtractTextPlugin("dist/[name].css");

const config = {
  // devtool: "source-map",
  entry: {
    someBlock: "./assets/scss/primary.scss",
    articlePage: "./assets/scss/secondary.scss",
    core: "./assets/scss/core.scss",
  },
  output: {
    filename: 'dist/bundle.js',
    chunkFilename: "[id]"
  },
  module: {
    rules: [
      {
        test: /core\.scss$/,
        // loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader']),
        loader: extractCoreCss.extract(['css-loader', 'sass-loader']),
      },
      {
        test: /\.scss$/,
        exclude: /core\.scss$/,
        loader: extractOtherCss.extract(['css-loader', 'sass-loader']),
      },
    ]
  },
  plugins: [
    // new ExtractTextPlugin("dist/[name].css"),
    extractCoreCss,
    extractOtherCss,
  ]
}

module.exports = config;

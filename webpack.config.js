var ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  // entry: "./src/index.js",
  // entry: "./assets/scripts/scripts.js",
  // output: {
  //     path: __dirname + 'dist',
  //     filename: 'bundle.js',
  // },
  entry: ['./assets/scripts/scripts.js', './assets/scss/styles.scss'],
  output: {
    filename: 'dist/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
        ]
      },
      {
        test: /\.scss$/,
        // use: [
        //   "style-loader",
        //   "css-loader",
        //   "sass-loader",
        // ]
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin({ // define where to save the file
      filename: 'dist/[name].bundle.css',
      allChunks: true,
    }),
  ],
}

module.exports = config;

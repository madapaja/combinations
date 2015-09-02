var webpack = require("webpack");

module.exports = {
  entry: './app',
  output: {
    path: __dirname + '/dist',
    filename: 'app.js'
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.AggressiveMergingPlugin()
  ]
};

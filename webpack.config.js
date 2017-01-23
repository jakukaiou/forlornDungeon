var webpack = require('webpack');
var tsloader = require('awesome-typescript-loader');

module.exports = {
  entry: './src/ts/game.ts',
  output: {
    filename: './dist/js/bundle.js'
  },
  module:{
      loaders:[
          { test: /\.ts$/, loader: 'awesome-typescript-loader'},
          { test: /pixi.js/, loader: "script" },
          { test: /phaser.js/, loader: "script" }
      ]
  },
  plugins: [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.AggressiveMergingPlugin()
  ]
}
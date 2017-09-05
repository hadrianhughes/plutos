'use strict';

const path = require('path');

module.exports = {
	entry: path.resolve(__dirname + '/src/index.jsx'),
	output: {
		path: path.resolve(__dirname + '/public/js'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
		]
	}
}

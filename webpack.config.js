'use strict';

const path = require('path');

module.exports = {
	entry: path.resolve(__dirname + '/src/index.jsx'),
	output: {
		path: path.resolve(__dirname + '/public/js'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.jsx?/,
				exclude: /node_modules/,
				use: [{
					loader: 'babel-loader'
				}]
			},
			{
				test: /\.scss/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'sass-loader'
					}
				]
			}
		]
	}
}

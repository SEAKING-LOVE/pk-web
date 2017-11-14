const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	plugins: [
		new webpack.DefinePlugin({
			API_HOST: JSON.stringify('http://pk-api.jasonmh.me')
		}),
		new UglifyJSPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		})
	]
});

const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	plugins: [
		new webpack.DefinePlugin({
			 API_HOST: JSON.stringify('http://localhost:3000')
		}),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('development')
			}
		})
	],
	devtool: "source-map"
});

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = {
	DIST: path.resolve(__dirname, 'dist'),
	SRC: path.resolve(__dirname, 'src'),
};

module.exports = {
	entry: path.join(paths.SRC, 'index.js'),
	output: {
		path: paths.DIST,
		filename: 'app.bundle.js'
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(paths.SRC, 'index.html')
		}),
		new webpack.DefinePlugin({
			API_HOST: JSON.stringify('http://localhost:3000')
		})
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [
					'babel-loader',
				],
			},
			{
				test: /\.(png|jpg|jpeg|gif)$/,
				use: [
					'file-loader',
				],
			},
		],
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
};
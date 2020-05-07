var path = require('path');
var SRC_DIR = path.join(__dirname, '/src');
var DIST_DIR = path.join(__dirname, '/public');

module.exports = {
	mode: 'development',
	entry: `${SRC_DIR}/index.jsx`,
	output: {
		filename: 'bundle.js',
		path: DIST_DIR
	},
	module: {
		rules: [
		{
			test: /\.jsx?/,
			include: SRC_DIR,
			use: {
				loader: 'babel-loader',
				query: {
					presets: ['@babel/preset-react', '@babel/env']
				}				
			}
		}]
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	devtool: 'inline-source-map',
}

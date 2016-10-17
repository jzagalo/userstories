module.exports = {
	entry: './src/script.js',
	output: {
		path: './dist',
		filename: 'script.bundle.js'
	},
	target: 'node',
	
	module:{
		loaders:[{
			exclude: /node_modules/,
			loader:  'babel-loader'
		}]
	}
}
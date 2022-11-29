const path = require("path")

module.exports = {
	entry: {
		client_home: path.resolve(__dirname, "./src/pages/home/index.js"),
		admin_close_position_history: path.resolve(__dirname, "./src/pages/admin-close-position-history/index.js"),
	},
	module: {
		rules: [
			{
				test: /\.(js)$/,
				exclude: /node_modules/,
				use: ["babel-loader"],
			},
		],
	},
	resolve: {
		extensions: ["*", ".js"],
	},
	output: {
		path: path.resolve(__dirname, "./assets/scripts"),
		filename: "[name].min.js",
	},
	devServer: {
		static: path.resolve(__dirname, "./assets/scripts"),
	},
}

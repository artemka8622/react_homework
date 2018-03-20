var webpack = require('webpack');

module.exports = {
    entry: "./src/main.js",
    output: {
        path: __dirname + '/public/build/',
        publicPath: "build/",
        filename: "bundle.js"
    },
	resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
		rules : [
            {
                test: /\.js$/,
                exclude: [/node_modules/, /public/],
				use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react']
                    }
                }
            },
            {
				
                test: /\.jsx$/,
                exclude: [/node_modules/, /public/],
				use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react']
                    }
                }
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            }
        ]
    }
}
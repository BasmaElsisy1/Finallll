const path = require ("path");
const webpack = require ("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin")


module.exports={
    entry: './src/client/index.js',
    mode : "development",
    output: {
        libraryTarget: 'var',
        library: 'Client'
    },
    module:{ 
        rules: [
            {
                test: '/\.js$/',
                exclude: /node.modules/,
                loader: "babel-loader"
            },

            {
                test: /\.scss$/,
                use:[ 'style-loader' , 'css-loader' , 'sass-loader']
            }
        ]

    },

    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
            minify: false
        })
    
    ]

}
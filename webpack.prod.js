const path = require ("path");
const webpack = require ("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin")
const workboxPlugin = require ("workbox-webpack-plugin");


module.exports={
    entry: './src/client/index.js',
    mode : "production",
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
                test: /\.scss$/i,
                use: ['style-loader','css-loader','sass-loader']
             }
        ]

    },

    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),

        new workboxPlugin.GenerateSW()
    
    ]

}
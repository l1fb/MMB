const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: ["babel-polyfill", "./client/src/index.jsx"],
    output: {
        path: path.resolve(__dirname, "./client/public"),
        filename: "bundle.js"
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-0"]
                }
            },
            {
                test: /\.(scss|css)?/,
                use: [
                    process.env.NODE_ENV !== 'production' ? "style-loader" : MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    }
}
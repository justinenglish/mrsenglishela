const webpack = require("webpack");
const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const ExtractText = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        vendor: "./src/vendor/js",
        main: "./src/js"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "assets/[name].[hash].js"
    },
    devServer: {
        port: 9090
    },
    resolve: {
        alias: {
            js: path.resolve(__dirname, "src", "js"),
            assets: path.resolve(__dirname, "src", "assets"),
            vendor: path.resolve(__dirname, "src", "vendor")
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(vendor|node_modules)/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ['env'],
                            plugins: [require('babel-plugin-transform-object-assign')]
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ExtractText.extract({
                    use: ["css-loader"]
                })
            },
            {
                test: /\.scss$/,
                use: ExtractText.extract({
                    use: ["css-loader", "sass-loader"]
                })
            },
            {
                test: /\.html$/,
                use: [ {
                    loader: "html-loader",
                    options: {
                        removeComments: false,
                        attrs: ['img:src', 'link:href']
                    }
                }]
            },
            {
                test: /\.(csv|rss|json|eot|ttf|svg|woff|woff2)$/,
                exclude: [],
                use: [{
                    loader: "file-loader",
                    options: {
                        name: "assets/[name].[hash].[ext]"
                    }
                }]
            }, 
            {
                test: /\.(png|jpg|jpeg|gif|bmp|svg)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            name: "[name].[hash].[ext]",
                            limit: 10000
                        }
                    }
                ]
            }
            
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",            
            minChunks: Infinity
        }),
        new ExtractText({
            filename: "[name].[hash].css"
        }),
        new HtmlPlugin({
            template: "src/index.html"
        })
    ]
    
};
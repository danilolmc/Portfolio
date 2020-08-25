const HtmlWerbpackplugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");

module.exports = {

    module: {
        rules: [


            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [

                    "file-loader"
                ]
            },

            {
                test: /\.js$/,
                exclude: "/node_modules/",
                use: {
                    loader: "babel-loader",
                }
            },

            {
                test: /\.html$/,
                use: [{
                    loader: "html-loader",
                    options: { minimize: true }
                }]
            },

            {
                test: /\.scss$/,
                use: [

                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
        ]
    },

    plugins: [

        new HtmlWerbpackplugin({

            template: "./src/index.html",
            filename: "index.html"
        }),

        new MiniCSSExtractPlugin({
            filename:"[name].css",
            chunkFilename: "[id].css"
        })

    ]
}
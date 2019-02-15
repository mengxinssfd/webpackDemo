const path = require("path");
const cleanPlugin = require("clean-webpack-plugin")
const extractTextPlugin = require("extract-text-webpack-plugin");
const htmlPlugin = require("html-webpack-plugin");
const analyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const webpack = require("webpack");
const config = env => {
    return {
        entry: {
            index: "./src/pages/index",
            main: "./src/pages/main",
        },
        output: {
            path: path.resolve(__dirname, "../dist"),
            filename: "js/[name].js",
            chunkFilename: "js/[name].[chunkhash:4].js"
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: {
                        loader: "ts-loader"
                    }
                },
                {
                    test: /\.less$/,
                    use: extractTextPlugin.extract({
                        use: [
                            "css-loader",
                            "less-loader"
                        ]
                    })
                }
            ]
        },
        optimization: {
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/](?!vue)/,
                        chunks: "all",
                        minSize: 0,
                        name: "vendor",
                        minChunks: 2,
                        priority: 10
                    },
                    common: {
                        chunks: "all",
                        minSize: 2000,
                        name: "common",
                        minChunks: 2,
                    }
                }
            }
        },
        resolve: {
            extensions: [".ts", ".js", ".json"]
        },
        plugins: [
            new webpack.DllReferencePlugin({
                context: __dirname,
                // name: "../src/dll/vendor-dll.js",
                manifest: require("../src/dll/vendor-manifest.json"),
            }),
            new webpack.DllReferencePlugin({
                context: __dirname,
                // name: "../src/dll/vendor-dll.js",
                manifest: require("../src/dll/vue-manifest.json"),
            }),
            new cleanPlugin([path.resolve(__dirname, "../dist")], {
                root: path.resolve(__dirname, "../")
            }),
            new extractTextPlugin({
                filename: "css/[name].[hash:4].css"
            }),
            new htmlPlugin({
                template: "./src/pages/index/index.html",
                filename: "index.html",
                chunks: ["index", "common", "vendor"]
            }),
            new htmlPlugin({
                template: "./src/pages/main/index.html",
                filename: "main.html",
                chunks: ["main", "vendor"]
            }),
            // new analyzerPlugin(),
        ]
    }
}
module.exports = env => {
    // return env === "production" ? "" : ""
    let conf = config();
    conf.mode = env;
    return conf;
}
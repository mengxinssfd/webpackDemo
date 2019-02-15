const path = require("path");
const webpack = require("webpack");
const analyzer = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const clean = require("clean-webpack-plugin")

module.exports = {
    entry: {
        vendor: [
            "jquery",
            "lodash",
            "axios",
            // "vue",
            "element-ui"
        ],
        vue: ["vue"],
    },
    output: {
        path: path.resolve(__dirname, "../src/dll/"),
        filename: "[name].dll.js",
        library: "[name]"
    },
    plugins: [
        new clean(
            [path.resolve(__dirname, "../src/dll")],
            {
                root: path.resolve(__dirname, "../")
            }),
        new webpack.DllPlugin({
            path: path.join(__dirname, "../src/dll/", "[name]-manifest.json"),
            name: "[name]"
        }),
        // new analyzer(),
    ]
}
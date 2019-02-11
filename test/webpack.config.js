var path = require("path");
var CleanPlugin = require("clean-webpack-plugin");
module.exports = {
    mode: "production",
    entry: {
        app: "./src/app.ts"
        // app: "./src/app.js"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "./[name].js"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: {
                    loader: "ts-loader"
                }
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    plugins: [
        new CleanPlugin(["dist"])
    ]
}
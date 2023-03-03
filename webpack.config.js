const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => {
  const isDevelopment = argv.mode === "development";

  return {
    entry: "./src/index.js",
    output: {
      filename: isDevelopment ? "bundle.js" : "bundle.min.js",
      path: path.resolve(__dirname, "dist"),
    },
    devtool: isDevelopment ? "inline-source-map" : false,
    devServer: {
      static: path.join(__dirname, "dist"),
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.css$/,
          use: [
            isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
            "css-loader",
          ],
        },
      ],
    },
    plugins: isDevelopment ? [] : [new MiniCssExtractPlugin()],
  };
};

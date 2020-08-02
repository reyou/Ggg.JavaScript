var webpack = require("webpack"); // eslint-disable-line no-unused-vars
const CopyPlugin = require("copy-webpack-plugin");
var path = require("path");

module.exports = {
  context: __dirname,
  entry: {
    main: "./main.js",
    "pdf.worker": "pdfjs-dist/build/pdf.worker.entry",
  },
  mode: "none",
  output: {
    path: path.join(__dirname, "./dist"),
    publicPath: "./dist",
    filename: "[name].bundle.js",
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ context: "public", from: ".", to: "." }],
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    open: true,
    watchContentBase: true,
    port: 9000,
  },
};

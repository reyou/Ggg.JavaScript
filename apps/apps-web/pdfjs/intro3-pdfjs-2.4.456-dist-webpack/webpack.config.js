var path = require("path");

module.exports = {
  target: "web",
  entry: "./index.js",
  devServer: {
    contentBase: path.join(__dirname),
    open: true,
    watchContentBase: true,
    port: 9000,
  },
};

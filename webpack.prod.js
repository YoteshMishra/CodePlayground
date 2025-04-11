const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

process.env["NODE_ENV"] = "production";

module.exports = merge(common, {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"), // This is where build files will go
    filename: "bundle.js",
    clean: true, // Optional: cleans the /dist folder before build
  },
  optimization: {
    minimize: true,
    minimizer: [
      // You can also use ... here to include default JS minimizer
      `...`,
      new CssMinimizerPlugin(),
    ],
  },
});

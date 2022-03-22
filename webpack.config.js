const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new CopyWebpackPlugin({patterns: [{ from: "./src/index.html", to: "index.html" }]}),
  ],
  devServer: { static: path.join(__dirname, "dist"), compress: true },
  resolve: {
    fallback: {
      stream: require.resolve("stream-browserify"),
      crypto: require.resolve("crypto-browserify"),
      http: require.resolve("stream-http"),
      os: require.resolve("os-browserify/browser"),
      url: require.resolve("url"),
      https: require.resolve("https-browserify"),
    }

  }
};

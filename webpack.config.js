const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "postcss-loader"],
      },
      {
        test: /\.(png|svg|jp?g|gif)$/,
        use: ["file-loader"],
      },
    ],
  },
};

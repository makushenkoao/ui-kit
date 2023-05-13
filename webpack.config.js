const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.ts",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "umd",
    clean: true,
  },
  resolve: {
    extensions: [".ts", ".tsx"],
  },
  externals: {
    react: "react",
  },
  module: {
    rules: [
      {
        use: ["style-loader", "css-loader"],
        test: /\.css/,
        exclude: /node_modules/,
      },
      {
        use: ["ts-loader"],
        test: /\.(ts|tsx)?$/,
        exclude: /node_modules/,
      },
    ],
  },
};

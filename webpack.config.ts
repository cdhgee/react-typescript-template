import * as path from "path";
import * as webpack from "webpack";

const config: webpack.Configuration = {
  entry: "./src/client-app",
  mode: "development",
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.[jt]sx?$/,
        use: [
          {
            loader: "babel-loader",
          },
          {
            loader: "ts-loader",
          },
        ],
      },
    ],
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "app"),
  },
  resolve: {
    extensions: [
      ".js",
      ".jsx",
      ".ts",
      ".tsx",
    ],
  },
};

// tslint:disable-next-line:no-default-export
export default config;

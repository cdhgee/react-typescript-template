import * as webpack from "webpack";

export interface ProjectConfig extends webpack.Configuration {

  entry: webpack.Entry;
  mode: "production" | "development";
  module: ProjectModule;

}

export interface ProjectModule extends webpack.Module {

  rules: ProjectUseRule[];

}

export interface ProjectUseRule extends webpack.NewUseRule {

  use: webpack.NewLoader | webpack.NewLoader[];

}

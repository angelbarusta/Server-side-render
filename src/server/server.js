import express from "express";
import dotenv from "dotenv";
import webpack from "webpack";

import main from "../server/routes/main.js";

dotenv.config();

const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 1111;
const HOST = `http://localhost:${PORT}/`;

const app = express();

if (ENV === "development") {
  console.log(`LOADING...DEVELOP_SERVER in:${HOST}`);
  const webpackConfig = require("../../webpack.serv.config.js");
  const webpackDevMiddleWare = require("webpack-dev-middleware");
  const webpackHotMiddleWare = require("webpack-hot-middleware");
  const compiler = webpack(webpackConfig);

  const serverConfig = {
    contentBase: `http://localhost:${PORT}/`,
    port: PORT,
    publicPath: webpackConfig.output.publicPath,
    open: true,
    hot: true,
    historyApiFallback: true,
    stats: { colors: true }
  };
  app.use(webpackDevMiddleWare(compiler, serverConfig));
  app.use(webpackHotMiddleWare(compiler));
}

app.get("*", (req, res) => main(req, res));

app.listen(PORT, (err) => {
  if (err) console.error("ERROR.listen.PORT :", err);
  console.log(`Server running on port:${PORT}`);
});

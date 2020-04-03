import express from "express";
import dotenv from "dotenv";
import webpack from "webpack";

dotenv.config();

const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 3000;

const app = express();

if (ENV === "development") {
  console.log("LOADING...DEVELOP_SERVER");
  const webpackConfig = require("../../webpack.dev.config.js");
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

app.get("*", (req, res) => {
  const MOLDE = require("../../dist/index.html");
  res.send(MOLDE);
});

app.listen(PORT, (err) => {
  if (err) console.error("ERROR.listen.PORT :", err);
  console.log(`Server running on port:${PORT}`);
});

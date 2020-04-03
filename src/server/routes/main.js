import React from "react";
import { renderToString } from "react-dom/server";

import { createStore } from "redux";
import { StaticRouter } from "react-router";
import { renderRoutes } from "react-router-config";

import Routes from "../../frontend/routes/serverRoutes";
import Layout from "../../frontend/components/Layout";
import reducer from "../../frontend/reducers";
import initialState from "../../frontend/initialState";
import render from "../render";
import { Provider } from "react-redux";

const main = (req, res, next) => {
  try {
    const store = createStore(reducer, initialState, composeEnhancers());
    const html = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url} context={{}}>
          <Layout>{renderRoutes(Routes)}</Layout>
        </StaticRouter>
      </Provider>
    );
    res.send(render(html));
  } catch (err) {
    next(err);
  }
};
export default main;

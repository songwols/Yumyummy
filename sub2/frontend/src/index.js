import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "mobx-react";
import "./index.css";
import App from "./App";
import RootStore from "./stores";
import * as serviceWorker from "./serviceWorker";

const root = new RootStore();

ReactDOM.render(
  <Provider {...root}>
    {}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
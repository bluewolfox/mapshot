import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/common/App";
import "./index.scss";
import store from "./modules";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

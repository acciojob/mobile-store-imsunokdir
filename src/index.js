import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import mobileStore from "./store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={mobileStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);

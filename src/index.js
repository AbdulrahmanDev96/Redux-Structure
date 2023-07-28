import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// el provider byabel mene el store bt3 el application
import {Provider} from "react-redux";
import { store } from "./redux/store"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

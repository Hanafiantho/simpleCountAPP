import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {Provider} from "react-redux";
import { createStore } from "redux";
import reducers from "./redux/reducers";

// BOOTSTRAP CSS
import 'bootstrap/dist/css/bootstrap.css';

const store = createStore(reducers)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById("root")
);
import ReactDom from "react-dom/client";
import App from "./App"
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'

import store from './redux/tableStateGenForm/store'

const root = ReactDom.createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

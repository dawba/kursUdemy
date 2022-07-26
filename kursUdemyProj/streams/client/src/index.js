import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import App from "./components/App";
import reducers from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers /* preloadedState, */,
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  composeEnhancers(applyMiddleware())
);
const element = document.getElementById("root");
const root = ReactDOM.createRoot(element);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

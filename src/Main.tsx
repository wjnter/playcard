import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer } from "./store";
import App from "./App";

const store = createStore(rootReducer);
const Main = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Main;

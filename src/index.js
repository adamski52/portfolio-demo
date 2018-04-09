import "core-js/es6/map";
import "core-js/es6/set";
import "raf/polyfill";

import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import thunkMiddleware from "redux-thunk";
import {createLogger} from "redux-logger";
import {createStore, applyMiddleware} from "redux";
import AppHandler from "./Handlers/AppHandler"

import "./index.css";

import App from "./Components/App";
import registerServiceWorker from "./registerServiceWorker";

let store = createStore(AppHandler.reducer,
    applyMiddleware(
        thunkMiddleware,
        createLogger()
    ));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("app")
);

registerServiceWorker();

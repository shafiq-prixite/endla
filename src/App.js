import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import "./App.css";

import { Provider } from "react-redux";
import { setupListeners } from "@reduxjs/toolkit/query";
import { siteTitle } from "./components/Shared/Layouts/LayoutDefault";

// import Meta from "./components/elements/Meta";
import BaseRouter from "./routes";

import reducer from "./reducers/index";
import { wellProfileApi } from "./services/wellProfile";
import Meta from "./components/Presentational/Meta";

const initialState = {};
const middleware = [thunk, wellProfileApi.middleware];
const store = createStore(
	reducer,
	initialState,
	applyMiddleware(...middleware),
);

setupListeners(store.dispatch);
class App extends Component {
	render() {
		return (
			<>
				<Meta
					title={siteTitle}
					preview="Endla develops state-of-the-art purpose specific engineering tools with performance based contracts that provide engineering businesses with a highly attractive return on spend digital tool projects."
					image="/images/spaced-logo.png"
					url="/"
				/>
				<Provider store={store}>
					<Router>
						<BaseRouter />
					</Router>
				</Provider>
			</>
		);
	}
}

export default App;

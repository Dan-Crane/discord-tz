import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter as Router} from "react-router-dom";

import App from './App';
import {actions, initialState, Provider, reducer} from "./store";

ReactDOM.render(
	<Provider initialState={initialState} reducer={reducer} actions={actions}>
		<Router>
			<React.StrictMode>
				<App/>
			</React.StrictMode>
		</Router>
	</Provider>,
	document.getElementById('root')
);


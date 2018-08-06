import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux'
import { Provider } from 'react-redux'
import ReduxPromise from 'redux-promise'

import './index.css';
import reducers from './reducers'
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const newStore = applyMiddleware(ReduxPromise)(createStore)

ReactDOM.render(
	<Provider store={newStore(reducers)}>
		<App />
	</Provider>
	, document.getElementById('root')
	);
//registerServiceWorker();

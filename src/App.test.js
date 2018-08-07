import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {applyMiddleware, createStore} from 'redux'
import { Provider } from 'react-redux'
import ReduxPromise from 'redux-promise'
import './index.css';
import reducers from './reducers'

const newStore = applyMiddleware(ReduxPromise)(createStore)

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  	<Provider store={newStore(reducers)}>
  	<App />
  	</Provider>
  	, 
  	div
  	);
  ReactDOM.unmountComponentAtNode(div);
});

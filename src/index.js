import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './styles/main.css';

// Router
import AppRouter from './routers/AppRouter';

import registerServiceWorker from './registerServiceWorker';

// Store
import configureStore from './store/configureStore';
const store = configureStore();

const app = (
	<Provider store={store}>
	  <AppRouter />
	</Provider>
  );

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();

// react redux & material-ui
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

// material-ui & mui theme
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from './theme/mui-theme';


// react redux routing
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'

import App from './components/App';
import { reducers } from './store/index';

// initial state
const initialState = { };

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();
// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

// create the store
const createStoreWithMiddleware = applyMiddleware(middleware)(createStore);
const store = createStoreWithMiddleware(reducers, initialState);

// styles
import '../public/styles/main';

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('app')
);

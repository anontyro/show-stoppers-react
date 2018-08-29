import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducer';

const logger = store => {
  return next => {
    return action => {
      console.log('[Middleware] Dispatching', action);
      // must pass action to reducer
      // can change the action here also
      const result = next(action);
      console.log('[Middleware] next state: ', store.getState());
      return result;
    }
  }
}

// enable redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(logger, thunk)));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>

, document.getElementById('root'),
);
registerServiceWorker();

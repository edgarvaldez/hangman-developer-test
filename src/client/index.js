import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';

import App from './components/App';

const composeEnhancers = composeWithDevTools({});
const store = createStore(reducers, composeEnhancers(
  applyMiddleware(reduxThunk),
));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('app'),
);

import { applyMiddleware, createStore, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
import { rootReducer } from './rootReducer';

export const history = createBrowserHistory();
const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });

const devTools =
    process.env.NODE_ENV === 'development'
      ? composeEnhancers(applyMiddleware(routerMiddleware(history)))
      : compose(applyMiddleware(routerMiddleware(history)));

export const store = createStore(rootReducer(history), devTools);

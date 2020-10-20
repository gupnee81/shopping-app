import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { selectedProductsArray } from '../reducers';

export const rootReducer = (history: any) => {
  return combineReducers({
    selectedProductsArray,
    router: connectRouter(history),
  });
};

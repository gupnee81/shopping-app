import update from 'immutability-helper';
import { CONSTANTS } from '../constants';
import { IProduct } from '../interface';
const { ADD } = CONSTANTS;

export interface IState {
  products: IProduct[];
}

export const initialState: IState = {
  products: [],
};

export const selectedProductsArray = (state = initialState, action: {type: string, product: IProduct[] }) => {
  switch (action.type) {
    case ADD:
      return update(state, { $merge: { products: action.product } },
    );
    default:
      return state;
  }
};

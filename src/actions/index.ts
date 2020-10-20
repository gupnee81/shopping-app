import { CONSTANTS } from '../constants';
import { IProduct } from '../interface';
const { ADD } = CONSTANTS;

export const addToCart = (product: IProduct[]) => {
  return {
    product,
    type: ADD,
  };
};

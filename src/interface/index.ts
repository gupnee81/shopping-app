export interface IProduct {
  id: number;
  sku: string;
  name: string;
  price: number;
  img: string;
}

export interface IProps {
  history: {
    push: (route: string) => void;
  };
}

export interface Iitem {
  img?: string;
  name?: string;
  sku?: string;
  price?: number;
  totalPrice?: number;
  count?: number;
}

export interface IRule {
  code: string;
  description: string;
  sku: string | null;
  value: number;
  value_type: string;
  conditions: {
    subTotal: number | null;
    minQuantity: number | null;
    dependentSku: {
      sku: string;
      quantity: number;
    };
  };
}

export interface IShoppingCart {
  count: number;
  img: string;
  name: string;
  price: number;
  sku: string;
  totalPrice: number;
}

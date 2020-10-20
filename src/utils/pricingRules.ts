import { IRule, IShoppingCart }  from '../interface';

export const runPercentageRule = (rule: IRule, shoppingCart: IShoppingCart[])  => {
  let calculateTotal: number = 0;
  if (rule.conditions.subTotal !== null) {
    shoppingCart.forEach((product: IShoppingCart) => {
      const { price, count } = product;
      calculateTotal += price * count;
    });
    if (Number(calculateTotal) > Number(rule.conditions.subTotal)) {
      calculateTotal = calculateTotal * ((100 - Number(rule.value)) / 100);
    }
  }
  return calculateTotal.toFixed(2);
};

export const runFixedAmountRule = (rule: IRule, shoppingCart: IShoppingCart[])  => {
  let calculateTotal: number = 0;
  if (rule.conditions.minQuantity !== null) {
    shoppingCart.forEach((product: IShoppingCart) => {
      let productPrice: number = 0;
      const { price, count, sku } = product;
      if (sku === rule.sku && count >= rule.conditions.minQuantity!) {
        productPrice = rule.value;
      } else productPrice = price;
      calculateTotal += productPrice * count;
    });
  }
  return calculateTotal.toFixed(2);
};

export const runFixedAmountSkuDependentRule = (rule: IRule, shoppingCart: IShoppingCart[])  => {
  let wfCount: number = 0;
  let calculateTotal: number = 0;

  shoppingCart.forEach((product: IShoppingCart) => {
    const { price, count, sku } = product;

    if (sku === rule.conditions.dependentSku.sku) {
      wfCount = count;
    }
    if (sku === rule.sku) {
      if (wfCount >= rule.conditions.dependentSku.quantity) {
        calculateTotal += rule.value * count;
      } else {
        calculateTotal += price * count;
      }
    } else {
      calculateTotal += price * count;
    }
  });

  return calculateTotal.toFixed(2);
};

export const runDefaultRule = (shoppingCart: IShoppingCart[])  => {
  let calculateTotal = 0;
  shoppingCart.forEach((product: IShoppingCart) => {
    calculateTotal += product.totalPrice;
  });

  return calculateTotal.toFixed(2);
};

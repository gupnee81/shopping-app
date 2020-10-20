import React from 'react';
import { CheckoutButtonWrapper, CheckoutButton } from '../styles/productStyles';
import { CartItemRowWrapper, CartItemRow, ProductImage, ProductPrice, ProductName,
  ProductCounter, PromoAndBillingTable, PromoRow, PromoCell1,
  PromoCell2, PromoCell3, Table, Row, Cell1, Cell2, PromoAndBillingCell1,
  PromoAndBillingCell2 } from '../styles/checkoutStyles';
import { ROUTES, CONSTANTS } from '../constants';
import { store } from '../store';
import { PricingRules } from '../data/pricingRules';
import { runPercentageRule, runFixedAmountRule, runDefaultRule,
  runFixedAmountSkuDependentRule } from '../utils/pricingRules';
import { IProps, Iitem, IProduct, IShoppingCart } from '../interface';

const Checkout = (props: IProps) => {
  const { PERCENTAGE, FIXED_AMOUNT, FIXED_AMOUNT_DEPENDENT_SKU } = CONSTANTS;
  const [shoppingCart, setShoppingCart] = React.useState([] as any);
  const [selectedPromocode, setPromocode] = React.useState('');

  React.useEffect(() => {
    const filteredProductsBySku: Iitem[] = [];
    const productsData:IProduct[] = store.getState().selectedProductsArray.products;
    const uniqueSkus = Array.from(new Set(productsData.map((item: IProduct) => item.sku)));
    uniqueSkus.forEach((skuId: string) => {
      let totalPrice = 0;
      let count = 0;
      const item: Iitem = {};
      for (const value of productsData) {
        const { img, name, sku, price } = value;
        if (skuId === sku) {
          totalPrice += price;
          count += 1;
          item.img = img;
          item.name = name;
          item.sku = sku;
          item.price = price;
          item.totalPrice = totalPrice;
          item.count = count;
        }
      }
      filteredProductsBySku.push(item);
    });
    setShoppingCart(filteredProductsBySku);
  }, []);

  const routeToProductsPage = () => {
    props.history.push(ROUTES.PRODUCT);
  };

  const onValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPromocode(event.target.value);
  };

  const calculatePrice = () => {
    if (selectedPromocode !== '') {
      const matchedRule: any = PricingRules.find(pricingRule =>
        pricingRule.code === selectedPromocode);
      switch (matchedRule && matchedRule.value_type) {
        case PERCENTAGE:
          return runPercentageRule(matchedRule, shoppingCart);
        case FIXED_AMOUNT:
          return runFixedAmountRule(matchedRule, shoppingCart);
        case FIXED_AMOUNT_DEPENDENT_SKU:
          return runFixedAmountSkuDependentRule(matchedRule, shoppingCart);
      }
    } else {
      return runDefaultRule(shoppingCart);
    }
  };

  return (
    <>
      <CheckoutButtonWrapper>
        <CheckoutButton onClick={routeToProductsPage}>Go to Products page</CheckoutButton>
      </CheckoutButtonWrapper>
      <Table>
        <Row>
          <Cell1>
            {
            shoppingCart && shoppingCart.map((item: IShoppingCart) => {
              return (
                  <CartItemRowWrapper key={item.sku}>
                    <CartItemRow>
                      <ProductImage><img src={item.img} alt={item.name} /></ProductImage>
                      <ProductName>{item.name} <br/> <span>{item.sku}</span></ProductName>
                      <ProductCounter>{item.count}</ProductCounter>
                      <ProductPrice>${item.totalPrice.toFixed(2)} <br />
                        <span>unit price ${item.price}</span>
                      </ProductPrice>
                    </CartItemRow>
                  </CartItemRowWrapper>
              );
            })
          }
          </Cell1>
          <Cell2>
            <PromoAndBillingTable>
              <h3>Select promotion code to avail discount: </h3>
                {
                  PricingRules && PricingRules.map((rule) => {
                    return (
                      <PromoRow key={rule.code}>
                        <PromoCell1>
                            <input type='radio' value={rule.code} onChange={onValueChange} name='promocodes' />
                          </PromoCell1>
                        <PromoCell2>{rule.code}</PromoCell2>
                        <PromoCell3>{rule.description}</PromoCell3>
                      </PromoRow>
                    );
                  })
                }
            </PromoAndBillingTable>
            <br/><br/>
            <PromoAndBillingTable>
              <PromoRow>
                <PromoAndBillingCell1>Subtotal: </PromoAndBillingCell1>
                <PromoAndBillingCell2>{calculatePrice()}</PromoAndBillingCell2>
              </PromoRow>
              <PromoRow>
                <PromoAndBillingCell1>Promo-code: </PromoAndBillingCell1>
                <PromoAndBillingCell2>{selectedPromocode}</PromoAndBillingCell2>
              </PromoRow>
              <PromoRow>
                <PromoAndBillingCell1>Total: </PromoAndBillingCell1>
                <PromoAndBillingCell2>{calculatePrice()}</PromoAndBillingCell2>
              </PromoRow>
            </PromoAndBillingTable>

          </Cell2>
        </Row>
      </Table>
    </>
  );
};

export default Checkout;

import React from 'react';
import { useDispatch } from 'react-redux';
import { ProductsInStore } from '../data/productsInStore';
import { Heading2, ProductsContainer, Tile, ProductTileImageWrapper, ProductPrice,
  ProductInfoWrapper, ProductButtonWrapper, ProductName,
  CheckoutButtonWrapper, CheckoutButton } from '../styles/productStyles';
import * as action from '../actions';
import { ROUTES } from '../constants';
import { IProduct, IProps } from '../interface';
import { store } from '../store';

const Products = (props: IProps) => {
  const checkStore = () => {
    return store.getState().selectedProductsArray.products;
  };

  const [cartArray, setCartArray] = React.useState(checkStore());

  const dispatch = useDispatch();

  const handleAddToCart = (product:any) => {
    setCartArray(cartArray.concat(product));
  };

  const routeToShoppingCartPage = () => {
    props.history.push(ROUTES.CHECKOUT);
  };

  React.useEffect(() => {
    dispatch(action.addToCart(cartArray));
  }, [cartArray, dispatch]);

  return (
    <>
      <Heading2>Products</Heading2>
      <CheckoutButtonWrapper>
        <CheckoutButton onClick={routeToShoppingCartPage}>Show shopping cart</CheckoutButton>
      </CheckoutButtonWrapper>
      <ProductsContainer>
      {
        ProductsInStore && ProductsInStore.map((product:IProduct) => {
          return  (<Tile key={product.sku}>
            <div>
              <ProductTileImageWrapper>
                <img src={product.img} alt={product.name} />
              </ProductTileImageWrapper>
              <ProductInfoWrapper>
                <ProductPrice>${product.price}</ProductPrice>
                <ProductName>{product.name}</ProductName>
                <ProductButtonWrapper onClick={() => {
                  handleAddToCart(product);
                }}>Add to Cart</ProductButtonWrapper>
              </ProductInfoWrapper>
            </div>
          </Tile>);
        })
      }
      </ProductsContainer>
    </>
  );
};

export default Products;

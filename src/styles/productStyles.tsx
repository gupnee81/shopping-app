
import styled from 'styled-components';

export const Heading1 = styled.h1`
  color: #052d4f;
  text-align: center;
  width: 100%;
`;

export const Heading2 = styled.h2`
  color: #052d4f;
`;

export const ProductsContainer = styled.div`
  position: relative;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: start;
  justify-content: flex-start;
  width: 60%;
  padding-left: 1px;
  display: flex;
  flex-wrap: wrap;
`;

export const Tile = styled.div`
  padding: 10px;
  margin-bottom: -1px;
  margin-left: -1px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(224, 224, 224);
  width: calc(25% + 1px);
  box-sizing: border-box;
`;

export const ProductTileWrapper = styled.div`

`;

export const ProductTileImageWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  height: 195px;
  min-height: 195px;

  > img {
    width: 190px;
    height: auto;
    max-width: 100%;
    max-height: 100%
  }
`;

export const ProductInfoWrapper = styled.div`
  padding-top: 10px;
`;

export const ProductPrice = styled.div`
  font-size: 26px;
  font-family: arial;
  font-weight: 700;
  color: #052d4f;
  line-height: 1;
`;

export const ProductName = styled.div`
  font-size: 20px;
  font-family: arial;
  font-weight: 700;
  color: #052d4f;
  line-height: 1;
  margin: 8px 0;
`;

export const ProductAddToCartButtonContainer = styled.div`
  font-size: 26px;
  font-family: arial;
  font-weight: 700;
  color: rgb(0, 91, 171);
  line-height: 1;
`;

export const ProductButtonWrapper = styled.button`
  font-weight: bold;
  font-family: Arial, sans-serif;
  font-size: 14px;
  line-height: 1.5;
  border-radius: 3px;
  border-width: 0px;
  border-style: solid;
  box-shadow: none;
  padding: 10px 20px;
  cursor: pointer;
  background-color: #ff6d05;
  border-color: #ff6d05;
  color: #fff;
  width: 100%;
  text-align: center;
`;

export const CheckoutButtonWrapper = styled.div`
  width: 95%;
  text-align: right;
  margin-right: 100px;
  margin-bottom: 50px;
`;

export const CheckoutButton = styled(ProductButtonWrapper)`
  width: 250px;
`;

export const DeleteButton = styled(ProductButtonWrapper)`
  width: 80px;
`;

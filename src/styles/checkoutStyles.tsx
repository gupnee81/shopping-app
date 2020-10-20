import styled from 'styled-components';

export const Heading1 = styled.h1`
  color: green;
`;
export const CartItemRowWrapper = styled.div`
  border-bottom: 1px dotted grey;
  margin: 0 20px;
`;

export const CartItemRow = styled.div`
  box-sizing: border-box;
  padding: 20px;
`;

export const CartRow = styled.div`
  display: inline-block;
  width: 20%;
  vertical-align: middle;
  box-sizing: border-box;
  padding: 10px;
`;

export const ProductImage = styled(CartRow)`
  > img {
    text-align: center;
    height: 100px;
    width: 100px;
  }
`;

export const ProductName = styled(CartRow)`
  color: #052d4f;
  font-size: 20px;
  font-weight: bold;

  > span {
    font-size: 16px;
    color: rgb(160, 160, 160);
    font-weight: normal
  }
`;

export const ProductPrice = styled(CartRow)`
  color: #052d4f;
  width: 30%;
  font-weight: bold;
  font-size: 24px;

  > span {
    font-size: 16px;
    color: rgb(160, 160, 160);
    font-weight: normal
  }
`;

export const ProductCounter = styled(CartRow)`
`;

export const ProductDelete = styled(CartRow)`
  width: 5%;
`;

export const Total = styled(CartRow)`
  display: block;
`;

export const TotalWrapper = styled(CartItemRowWrapper)`
  width: 30%;
  display: inline-block;
  vertical-align: top;
  margin-left: 2%;
`;

export const Table = styled.div`
  width: 100%;
  margin-left: 2%;
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  flex: 1 1 auto;
  width: 100%;
  border: 0px dotted grey;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  padding: 10px;
`;

export const Cell1 = styled.div`
  flex: 0 0 50%;
  background: #fff;
`;

export const Cell2 = styled.div`
  flex: 0 0 30%;
  margin-left: 2%;
  background: #fff;
`;

export const PromoAndBillingTable = styled.div`
  width: 100%;
  margin-left: 2%;
  display: flex;
  flex-direction: column;
`;

export const PromoRow = styled.div`
  flex: 1 1 auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  padding: 10px;
`;

export const PromoCell1 = styled.div`
  flex: 0 0 5%;
  font-weight: bold;
`;

export const PromoCell2 = styled.div`
  flex: 0 0 18%;
  font-weight: bold;
  box-sizing: border-box;
  padding-left: 5px;

`;

export const PromoCell3 = styled.div`
  box-sizing: border-box;
  padding-left: 15px;
  flex: 0 0 75%;
`;

export const PromoAndBillingCell1 = styled.div`
  flex: 0 0 20%;
  font-weight: bold;
`;

export const PromoAndBillingCell2 = styled.div`
  flex: 0 0 25%;
  font-weight: bold;
`;

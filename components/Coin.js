import React from 'react';
import styled from 'styled-components';

export default function Coin({ name, image, symbol, price, priceChange }) {
  return (
    <CoinRow>
      <ImgNameContainer>
        <span>
          <Images width={20} height={20} src={image} alt="Image" />
        </span>
        <CoinName>{name}</CoinName>
      </ImgNameContainer>
      <CoinSymbol>{symbol}</CoinSymbol>

      <CoinPrice>€{price}</CoinPrice>

      <CoinPercentage>
        {priceChange < 0 ? (
          <PercentChangeRed>{priceChange.toFixed(2)}%</PercentChangeRed>
        ) : (
          <PercentChangeGreen>{priceChange.toFixed(2)}%</PercentChangeGreen>
        )}
      </CoinPercentage>
    </CoinRow>
  );
}
const ImgNameContainer = styled.span`
  margin-bottom: 14px;
`;

const Images = styled.img`
  z-index: -1;
  margin-left: 10px;
`;

const CoinRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(4, 23%);
  height: 70px;
  border-bottom: 1px solid #d7d7d7;
  margin: 10px;
`;

const CoinName = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 10px;
  text-align: center;
  margin-top: 5px;
`;

const CoinSymbol = styled.p`
  font-family: 'Montserrat', sans-serif;
  margin-top: 20px;
  margin-left: 15px;
  text-transform: uppercase;
  font-size: 10px;
`;

const CoinPrice = styled.p`
  font-family: 'Montserrat', sans-serif;
  width: 20px;
  margin-left: 6px;
  margin-top: 20px;
`;

const CoinPercentage = styled.div`
  margin-top: 10px;
  margin-left: 30px;
`;

const PercentChangeRed = styled.p`
  color: red;
`;

const PercentChangeGreen = styled.p`
  color: green;
`;

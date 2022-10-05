import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Coin = ({
  name,
  image,
  symbol,
  price,
  volume,
  priceChange,
  marketcap,
}) => {
  return (
    <CoinContainer>
      <CoinRow>
        <Coins>
          <ImageContainer>
            <Image width={30} height={30} src={image} alt="crypto " />
          </ImageContainer>
          <CoinName>{name}</CoinName>
          <CoinSymbol>{symbol}</CoinSymbol>
        </Coins>

        <CoinData>
          <CoinPrice>€{price}</CoinPrice>
          <CoinVolume>€{volume.toLocaleString()}</CoinVolume>
          {priceChange < 0 ? (
            <PercentChangeRed>{priceChange.toFixed(2)}%</PercentChangeRed>
          ) : (
            <PercentChangeGreen>{priceChange.toFixed(2)}%</PercentChangeGreen>
          )}
          <MarketCap>Mkt Cap: €{marketcap.toLocaleString()}</MarketCap>
        </CoinData>
      </CoinRow>
    </CoinContainer>
  );
};

export default Coin;

const CoinContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const CoinRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: start;
  align-items: center;
  height: 80px;
  border-bottom: 1px solid #d7d7d7;
  width: 200px;
`;

const Coins = styled.div`
  display: flex;
  align-items: center;
  padding-right: 24px;
  min-width: 300px;
`;

const CoinName = styled.h1`
  font-size: 16px;
  width: 150px;
`;
const ImageContainer = styled.div`
  margin-right: 10px;
`;
const CoinSymbol = styled.p`
  text-transform: uppercase;
`;

const CoinData = styled.div`
  display: flex;
  text-align: center;
  justify-content: space-between;
  width: 100%;
`;

const CoinPrice = styled.p`
  width: 110px;
`;
const CoinVolume = styled.p`
  width: 230px;
`;
const MarketCap = styled.p`
  width: 155px;
`;

const PercentChangeRed = styled.p`
  color: red;
`;

const PercentChangeGreen = styled.p`
  color: green;
`;

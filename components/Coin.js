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
            <Image width={20} height={20} src={image} alt="crypto " />
          </ImageContainer>
          <CoinName>{name}</CoinName>
          <CoinSymbol>{symbol}</CoinSymbol>
        </Coins>

        <CoinData>
          <CoinPrice>€{price}</CoinPrice>
          <CoinVolume>€{volume.toLocaleString()}</CoinVolume>
          <CoinPercentage>
            {priceChange < 0 ? (
              <PercentChangeRed>{priceChange.toFixed(2)}%</PercentChangeRed>
            ) : (
              <PercentChangeGreen>{priceChange.toFixed(2)}%</PercentChangeGreen>
            )}
          </CoinPercentage>
          <MarketCap>€{marketcap.toLocaleString()}</MarketCap>
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
  height: 50px;
  border-bottom: 1px solid #d7d7d7;
  width: 360px;
`;

const Coins = styled.div`
  display: flex;
  align-items: center;
  min-width: 140px;
  margin-top: 10px;
`;

const CoinName = styled.h1`
  font-size: 8px;
  width: 70px;
  margin-left: 12px;
`;
const ImageContainer = styled.div`
  margin-top: 5px;
`;
const CoinSymbol = styled.p`
  text-transform: uppercase;
  font-size: 7px;
  margin-right: 10px;
`;

const CoinData = styled.div`
  display: flex;
  text-align: center;
  justify-content: space-between;
`;

const CoinPrice = styled.p`
  width: 10px;
  margin-top: 20px;
  margin-right: 35px;
`;
const CoinVolume = styled.p`
  width: 180px;
  margin-top: 20px;
`;
const MarketCap = styled.p`
  width: 155px;
  margin-top: 20px;
`;

const CoinPercentage = styled.div`
  display: flex;
  margin-top: 10px;
`;

const PercentChangeRed = styled.p`
  color: red;
`;

const PercentChangeGreen = styled.p`
  color: green;
`;

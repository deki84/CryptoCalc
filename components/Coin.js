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
          <MarketCap>€MktCap {marketcap.toLocaleString()}</MarketCap>
        </CoinData>
      </CoinRow>
    </CoinContainer>
  );
};

export default Coin;

const CoinContainer = styled.div`
  display: flex;

  justify-content: center;
  margin-left: 165px;
`;
const CoinRow = styled.div`
  display: flex;
  flex-direction: row;
  text-align: start;
  justify-items: start;
  align-items: center;
  margin-left: 0;
  height: 45px;
  border-bottom: 1px solid #d7d7d7;
  width: 500px;
`;

const Coins = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  margin-right: 30px;
`;

const CoinName = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 10px;
  margin-top: 15px;
  width: 80px;
`;
const ImageContainer = styled.div`
  margin-left: 20px;
  margin-top: 10px;
  z-index: -1;
`;
const CoinSymbol = styled.p`
  font-family: 'Montserrat', sans-serif;
  margin-top: 20px;
  text-transform: uppercase;
  font-size: 10px;
`;

const CoinData = styled.div`
  font-family: 'Montserrat', sans-serif;
  display: flex;
  text-align: center;
  margin: 20px;
`;

const CoinPrice = styled.p`
  width: 20px;
  margin-top: 20px;
  margin-right: 0;
`;
const CoinVolume = styled.p`
  width: 155px;
  margin-top: 20px;
  margin-left: 0;
`;
const MarketCap = styled.p`
  width: 130px;
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const CoinPercentage = styled.div`
  margin-top: 10px;
  margin-right: 20px;
  text-align: center;
`;

const PercentChangeRed = styled.p`
  color: red;
`;

const PercentChangeGreen = styled.p`
  color: green;
`;

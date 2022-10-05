import React from 'react';
import styled from 'styled-components';
import Coin from '../components/Coin';

const Crypto = ({ filteredCoins, handleChange }) => {
  return (
    <>
      <div>
        <CryptoHeadline>Crypto</CryptoHeadline>
      </div>

      <CoinContainer>
        <SearchCoin>
          <form>
            <CoinInput
              type="text"
              placeholder="Search"
              onChange={handleChange}
            />
          </form>{' '}
        </SearchCoin>
      </CoinContainer>

      {filteredCoins.map((coin) => {
        console.log(coin);
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            volume={coin.total_volume}
          />
        );
      })}
    </>
  );
};

export default Crypto;

const CryptoHeadline = styled.h1`
  display: flex;
  justify-content: center;
  margin: 30px;
`;

const CoinContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24px;
  color: #fff;
`;
const SearchCoin = styled.div`
  margin-bottom: 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CoinInput = styled.input`
  padding-left: 16px;
  width: 300px;
  height: 50px;
  border-radius: 10px;
  background-color: black;
  color: white;
  border: none;
`;

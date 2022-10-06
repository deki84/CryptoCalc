import React from 'react';
import styled from 'styled-components';
import Coin from '../components/Coin';

const Crypto = ({ filteredCoins, handleChange }) => {
  return (
    <>
      <div>
        <CryptoHeadline>Crypto</CryptoHeadline>
      </div>

      <CoinSearchContainer>
        <SearchCoin>
          <form>
            <CoinInput
              type="text"
              placeholder="Search"
              onChange={handleChange}
            />
          </form>
        </SearchCoin>
      </CoinSearchContainer>
      <CoinsHeadline>
        <p>Coin</p> <p>Symbol</p> <p>Price</p> <p>Volume</p>
        <p>Change(24h)</p> <p>Mkt.Cap</p>
      </CoinsHeadline>

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
  margin: 0;
  padding: 80px 0 40px;
`;

const CoinsHeadline = styled.span`
  display: flex;
  font-family: 'Montserrat', sans-serif;
  justify-content: space-evenly;
  margin-left: 20px;
  border-bottom: 1px solid #d7d7d7;
  width: 500px;
`;

const CoinSearchContainer = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  margin-bottom: 30px;

  color: #fff;
`;
const SearchCoin = styled.span`
  margin-bottom: 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CoinInput = styled.input`
  width: 150px;
  text-align: center;
  height: 50px;
  border-radius: 50px;
  background-color: black;
  color: white;
  border: none;
`;

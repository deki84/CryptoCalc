import React from 'react';
import styled from 'styled-components';
import Coin from '../components/Coin';

export default function Crypto({ filteredCoins, handleChange }) {
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
      <CoinGrid>
        <CoinCategory>Coin</CoinCategory>
        <CoinCategory>Symbol</CoinCategory>
        <CoinCategory>Price</CoinCategory>
        <CoinCategory>Change(24h)</CoinCategory>
        {filteredCoins.map((coin) => {
          return (
            <Coin1 key={coin.id}>
              <Coin
                name={coin.name}
                image={coin.image}
                symbol={coin.symbol}
                price={coin.current_price}
                priceChange={coin.price_change_percentage_24h}
              />
            </Coin1>
          );
        })}
      </CoinGrid>
    </>
  );
}
const Coin1 = styled.div`
  grid-column-start: 1;
  grid-column-end: -1;
`;

const CryptoHeadline = styled.h1`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 80px 0 40px;
`;

const CoinCategory = styled.span`
  font-family: 'Montserrat', sans-serif;
  border-bottom: 1px solid #d7d7d7;
  margin-left: 0;
`;

const CoinSearchContainer = styled.span`
  display: grid;
  justify-content: center;
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

const CoinGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 25%);
  justify-content: center;
`;

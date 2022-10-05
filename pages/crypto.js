import React from 'react';
import styled from 'styled-components';
import Coin from '../components/Coin';

const Crypto = ({ coins, filteredCoins, handleChange }) => {
  return (
    <>
      <div>
        <div>
          <h1>Search a currency</h1>
          <form>
            <input type="text" placeholder="Search" onChange={handleChange} />
          </form>
        </div>

        {filteredCoins.map((coin) => {
          console.log(coin);
          return (
            <Coin
              key={coin.id}
              name={coin.name}
              image={coin.image}
              symbol={coin.symbol}
              volume={coin.market_cap}
              price={coin.current_price}
            />
          );
        })}
      </div>

      <div>
        <CryptoHeadline>Crypto</CryptoHeadline>
      </div>
    </>
  );
};

export default Crypto;

const CryptoHeadline = styled.h1`
  display: flex;
  justify-content: center;
  margin: 30px;
`;

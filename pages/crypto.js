import React from 'react';
import styled from 'styled-components';
import Coin from '../components/Coin';

const Crypto = ({ filteredCoins, handleChange }) => {
  return (
    <>
      <div>
        <CryptoHeadline>Crypto</CryptoHeadline>
      </div>
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
              marketcap={coin.market_cap}
              price={coin.current_price}
              priceChange={coin.price_change_percentage_24h}
              volume={coin.total_volume}
            />
          );
        })}
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

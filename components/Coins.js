import React from 'react';
import CoinItem from './CoinItem';

function Coins({ coins }) {
  return (
    <>
      <div>
        {coins.map((coin) => {
          console.log(coin);
          return <CoinItem coin={coin} key={coin.id} />;
        })}
      </div>
    </>
  );
}

export default Coins;

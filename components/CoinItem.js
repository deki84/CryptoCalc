import React from 'react';

function CoinItems({ coin }) {
  return (
    <div>
      <p>{coin.current_price}</p>
    </div>
  );
}

export default CoinItems;

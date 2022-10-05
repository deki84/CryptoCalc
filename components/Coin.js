import React from 'react';
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
    <div>
      <div>
        <div>
          <Image width={30} height={30} src={image} alt="crypto " />
          <h1>{name}</h1>
          <p>{symbol}</p>
        </div>

        <div>
          <p>€{price}</p>
          <p>€{volume.toLocaleString()}</p>
          {priceChange < 0 ? (
            <p>{priceChange.toFixed(2)}%</p>
          ) : (
            <p>{priceChange.toFixed(2)}%</p>
          )}
          <p>Mkt Cap: €{marketcap.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Coin;

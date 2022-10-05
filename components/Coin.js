import React from 'react';
import Image from 'next/image';

const Coin = ({ name, image, symbol, price, volume }) => {
  return (
    <div>
      <div>
        <div>
          <Image width={30} height={30} src={image} alt="crypto " />
          <h1>{name}</h1>
          <p>{symbol}</p>
        </div>
        <p>€{price}</p>
        <p>€{volume}</p>
      </div>
    </div>
  );
};

export default Coin;

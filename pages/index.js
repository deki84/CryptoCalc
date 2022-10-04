import Form from '../components/Form';
import { useState } from 'react';

export default function Home({ coins }) {
  let [value, setValue] = useState();

  function calculatePrice(value, expense) {
    const crypto = coins[0];
    const priceCrypto = crypto.current_price;
    console.log(crypto.current_price);
    let result = 0;
    if (expense) {
      result = ((value * priceCrypto) / expense).toFixed(0);
    }
    setValue(result);
  }

  return (
    <>
      <div>
        <Form onCalculatePrice={calculatePrice} value={value} />
      </div>
    </>
  );
}

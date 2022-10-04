import Form from '../components/Form';
import { useState } from 'react';

export default function Home({ coins }) {
  let [value, setValue] = useState();

  function calculatePrice(value, expense) {
    const bitcoin = coins.market_data.current_price.eur;
    let result = 0;
    if (expense) {
      result = ((value * bitcoin) / expense).toFixed(0);
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

import styled from 'styled-components';
import Image from 'next/image';
import Logo from '../public/Logo.png';
import Form from '../components/Form';
import { useState } from 'react';

export default function Home() {
  let [value, setValue] = useState();

  function calculatePrice(value, expense) {
    const bitcoin = 20000;
    let result = 0;
    if (expense) {
      result = ((value * bitcoin) / expense).toFixed(0);
    }
    setValue(result);
  }

  return (
    <>
      <div>
        <Div>
          <Image layout="intrinsic" src={Logo} alt="something has failed " />
        </Div>
        <Headline>CryptoCalc</Headline>
        <Form onCalculatePrice={calculatePrice} value={value} />
      </div>
    </>
  );
}
const Div = styled.div`
  display: flex;
  justify-content: center;
`;

const Headline = styled.h1`
  display: flex;
  justify-content: center;
  font-family: 'Holtwood One SC', serif;
`;

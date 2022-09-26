import styled from 'styled-components';
import Image from 'next/image';
import Logo from '../public/Logo.png';
import Form from '../components/Form';
import { useState } from 'react';

export default function Home() {
  let [value, setValue] = useState();

  function calculatePrice(value, expense) {
    const bitcoin = 20000;
    const result = (value * bitcoin) / expense;

    function calculate() {
      return Number(result).toFixed(2);
    }
    setValue(calculate);
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

const Text = styled.p`
  display: flex;
  justify-content: center;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
`;

const Headline = styled.h1`
  display: flex;
  justify-content: center;
  font-family: 'Holtwood One SC', serif;
`;

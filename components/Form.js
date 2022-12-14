import styled from 'styled-components';
import Image from 'next/image';
import Logo from '../public/Logo.png';
import { useState } from 'react';
import calculation from '../utils/calculation';

export default function Form({ coins }) {
  const [value, setValue] = useState();
  const [selectedCoinName, setSelectedCoinName] = useState('');
  const [disableButton, setDisableButton] = useState(true);
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const expense = Number(form.expenses.value);
    const cryptovalue = Number(form.cryptovalue.value);
    const selectedCoin = coins.find((coin) => coin.name == selectedCoinName);

    const calculatedMonths = calculation(
      cryptovalue,
      expense,
      selectedCoin.current_price
    );
    setValue(calculatedMonths);
  }

  const [show, setShow] = useState(true);
  const [num, setNum] = useState();
  const handleNumChange = (event) => {
    const limit = 9;
    setNum(event.target.value.slice(0, limit));
  };

  const [num1, setNum1] = useState();
  const handleNumChange1 = (event) => {
    const limit = 9;
    setNum1(event.target.value.slice(0, limit));
  };

  return (
    <>
      <Img>
        <Image layout="intrinsic" src={Logo} alt="Logo" />
      </Img>
      <Headline>CryptoCalc</Headline>
      <StyledForm
        onSubmit={handleSubmit}
        onKeyPress={(e) => !/[0.1-9.9]/.test(e.key) && e.preventDefault()}
      >
        <Inputfield
          id="expenses"
          name="expenses"
          value={num}
          onChange={handleNumChange}
          type="number"
          step="0"
          min="0"
          placeholder="Type here your Monthly Expenses €"
          required
        />
        <Inputfield
          id="cryptovalue"
          name="cryptovalue"
          value={num1}
          onChange={handleNumChange1}
          type="number"
          step="any"
          min="any"
          placeholder="Type here your crypto count "
          required
        />
        <DropMenu
          required
          onChange={(e) => {
            setSelectedCoinName(e.target.value);
            setDisableButton(false);
          }}
        >
          <option>select coin</option>
          {coins.map((coin) => (
            <option key={coin.id} value={coin.name}>
              {coin.name}
            </option>
          ))}
        </DropMenu>
        <Button
          disabled={disableButton}
          onClick={() => {
            setShow(true);
          }}
        >
          Click me
        </Button>
        {show && value ? (
          <Text>Your current value is {value} Month </Text>
        ) : null}
      </StyledForm>
    </>
  );
}

const DropMenu = styled.select`
  background-color: whitesmoke;
  color: black;
  width: 180px;
  margin-bottom: 20px;
  margin-left: 70px;
  text-align: center;
  border-radius: 4px;
`;

const Text = styled.p`
  font-family: 'PT Sans', sans-serif;
  font-size: 14px;
  display: flex;
  justify-content: center;
  margin: 60px;
  background-color: #d1ccc9;
  border: none;
  border-radius: 10px;
  width: 250px;
  height: 50px;
  align-items: center;
`;
const Inputfield = styled.input`
  width: 250px;
  height: 25px;

  border-bottom: 1px solid grey;
  border-radius: 4px;
  background-color: white;
`;

const Button = styled.button`
  margin-left: 160px;
  width: 87px;
  height: 30px;
  color: white;
  background-color: black;
  border: none;
  border-radius: 10px;
  margin-top: 10px;
`;
const StyledForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Img = styled.div`
  display: flex;
  justify-content: center;
  margin: 0px;
  padding: 80px;
`;

const Headline = styled.h1`
  display: flex;
  justify-content: center;
`;

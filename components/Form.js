import styled from 'styled-components';
import { useState } from 'react';

export default function Form({ onCalculatePrice, value }) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const expenses = Number(form.expenses.value);
    const cryptovalue = Number(form.cryptovalue.value);

    onCalculatePrice(cryptovalue, expenses);
  }
  const [show, setShow] = useState(false);
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
  function timeout() {
    setTimeout(function () {
      setNum('');
      setNum1('');
      onCalculatePrice(0, 0);
      setShow(false);
    }, 2000);
  }

  return (
    <>
      <StyledForm
        onSubmit={handleSubmit}
        onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}
      >
        <Inputfield
          id="expenses"
          name="expenses"
          value={num}
          onChange={handleNumChange}
          type="number"
          placeholder="Type here your Monthly Expenses €"
          required
        />
        <Inputfield
          id="cryptovalue"
          name="cryptovalue"
          value={num1}
          onChange={handleNumChange1}
          type="number"
          placeholder="Type here your crypto value "
          required
        />
        <Button
          onClick={() => {
            setShow(true);
            timeout();
          }}
        >
          Click me
        </Button>
        {show && value ? <Text>Your current value is {value} </Text> : null}
      </StyledForm>
    </>
  );
}

const Text = styled.p`
  display: flex;
  justify-content: center;
`;
const Inputfield = styled.input`
  width: 235px;
  height: 25px;
`;

const Button = styled.button`
  margin-left: 148px;
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

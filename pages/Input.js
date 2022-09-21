import styled from 'styled-components';

export default function Input() {
  return (
    <>
      <Inputfield
        id="monthly expenses"
        type="decimal"
        placeholder="Type here your Monthly Expenses in €"
      />
      <Inputfield
        id="crypto value"
        type="decimal"
        placeholder="Type here your crypto value "
      />

      <Button type="submit">Click me</Button>
    </>
  );
}

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

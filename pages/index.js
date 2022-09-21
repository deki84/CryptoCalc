import styled from 'styled-components';
export default function Home() {
  return (
    <div>
      <Headline>CryptoCalc</Headline>
      <Form>
        <Input1
          id="name"
          type="text"
          placeholder="Type here your Monthly Expenses in €"
        />
        <Input1
          id="name"
          type="text"
          placeholder="Type here your crypto value "
        />
        <Button>Click me</Button>
      </Form>
    </div>
  );
}

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

const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Input1 = styled.input`
  width: 235px;
  height: 25px;
`;

const Headline = styled.h1`
  display: flex;
  justify-content: center;
  font-family: 'Holtwood One SC', serif;
`;

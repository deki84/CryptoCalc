import styled from 'styled-components';
import Image from 'next/image';
import Logo from '../public/Logo.png';
import Input from './Input';

export default function Home() {
  return (
    <>
      <div>
        <Div>
          <Image layout="intrinsic" src={Logo} alt="something has failed " />
        </Div>
        <Headline>CryptoCalc</Headline>
        <Form>
          <Input />
        </Form>
        <Text>Your current value is ...</Text>
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

const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Headline = styled.h1`
  display: flex;
  justify-content: center;
  font-family: 'Holtwood One SC', serif;
`;

import styled from 'styled-components';
import Image from 'next/image';
import Logo from '../public/Logo.png';

export default function Header() {
  return (
    <div>
      <Div>
        <Image layout="intrinsic" src={Logo} alt="something has failed " />
      </Div>
      <Headline>CryptoCalc</Headline>
    </div>
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

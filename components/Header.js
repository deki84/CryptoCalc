import styled from 'styled-components';
import Image from 'next/image';
import Logo from '../public/Logo.png';
import Navbar from './Navbar';

export default function Header() {
  return (
    <div>
      <Navbar />
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
  margin: 60px;
`;

const Headline = styled.h1`
  display: flex;
  justify-content: center;
`;

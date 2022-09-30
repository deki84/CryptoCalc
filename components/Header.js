import Navbar from './Navbar';
import Link from 'next/link';
import styled from 'styled-components';

export default function Header() {
  return (
    <>
      <Div>
        <CryptoCalcStyle>
          <Link href="/" passHref>
            <Linkto>Cryptocalc</Linkto>
          </Link>
        </CryptoCalcStyle>

        <CryptoStyle>
          <Link href="/crypto" passHref>
            <Linkto>Crypto</Linkto>
          </Link>
        </CryptoStyle>

        <NewsStyle>
          <Link href="/news" passHref>
            <Linkto>News</Linkto>
          </Link>
        </NewsStyle>
      </Div>
      <Navbar />
    </>
  );
}
const Linkto = styled.a`
  color: black;
`;

const Div = styled.nav`
  position: absolute;
  display: Flex;
  font-size: 14px;
`;
const CryptoCalcStyle = styled.div`
  color: black;
  justify-self: center;

  margin-left: 70px;
  margin-top: 10px;
`;
const NewsStyle = styled.div`
  margin-top: 10px;
  margin-left: 20px;
`;
const CryptoStyle = styled.div`
  margin-top: 10px;
  margin-left: 20px;
`;

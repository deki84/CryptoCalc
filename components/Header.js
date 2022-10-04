import Navbar from './Navbar';
import Link from 'next/link';
import styled from 'styled-components';

export default function Header() {
  return (
    <>
      <Nav>
        <CryptoStyle>
          <Link href="/" passHref>
            <Linkto>Cryptocalc</Linkto>
          </Link>
        </CryptoStyle>

        <CryptoStyle>
          <Link href="/crypto" passHref>
            <Linkto>Crypto</Linkto>
          </Link>
        </CryptoStyle>

        <CryptoStyle>
          <Link href="/news" passHref>
            <Linkto>News</Linkto>
          </Link>
        </CryptoStyle>

        <Navbar />
      </Nav>
    </>
  );
}
const Linkto = styled.a`
  color: black;
  margin-left: 20px;
`;

const Nav = styled.nav`
  position: relative;
  display: flex;

  justify-content: space-evenly; ;
`;

const CryptoStyle = styled.div`
  margin: 10px;
`;

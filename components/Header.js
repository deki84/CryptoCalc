import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Logo from '../public/Logo.png';
import Link from 'next/link';

export default function Header() {
  return (
    <>
      <Navbar>
        <HeadlineCrypto>
          <ImageIconHeadline>
            <Image
              layout="fixed"
              width={30}
              height={30}
              src={Logo}
              alt="something has failed "
            />
          </ImageIconHeadline>
        </HeadlineCrypto>
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
      </Navbar>
    </>
  );
}

const ImageIconHeadline = styled.div`
  display: flex;
  place-items: center;
`;

const HeadlineCrypto = styled.div`
  display: flex;
  z-index: -1;
  position: fixed;
  width: 100%;
`;

const Linkto = styled.a`
  color: black;
  margin-left: 20px;
  display: flex;
`;

const Navbar = styled.nav`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding-left: 20px;
  width: 100%;
  height: 40px;
  background-color: #d9d9d9;
  z-index: 1;
`;

const CryptoStyle = styled.div`
  margin: 10px;
`;

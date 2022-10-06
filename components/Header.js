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
  align-self: center;
  margin-left: 10px;
`;

const HeadlineCrypto = styled.div`
  background-color: #d9d9d9;
  height: 45px;
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
  width: 100%;
  align-items: center;
  margin-top: 0;
  display: flex;
  justify-content: space-evenly; ;
`;

const CryptoStyle = styled.div`
  margin: 10px;
`;

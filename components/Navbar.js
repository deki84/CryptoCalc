import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Logo from '../public/Logo.png';

const Navbar = () => {
  return (
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
        
  )}

export default Navbar;

const ImageIconHeadline = styled.div`
  align-self: center;
  margin-right:315px;
  
 
`;

const HeadlineCrypto = styled.div`
  background-color: #d9d9d9;
  height: 42px;
  display: flex;
  justify-content: space-evenly;
`;


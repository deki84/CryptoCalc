import React from 'react';
import styled from 'styled-components';

const Crypto = () => {
  return (
    <div>
      <CryptoHeadline>Crypto</CryptoHeadline>
    </div>
  );
};

export default Crypto;

const CryptoHeadline = styled.h1`
  display: flex;
  justify-content: center;
  margin: 30px;
`;
